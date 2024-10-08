import { setFeature } from "@aws-sdk/core";
import type { AccountIdEndpointMode } from "@aws-sdk/core/account-id-endpoint";
import type {
  AttributedAwsCredentialIdentity,
  AwsHandlerExecutionContext,
  AwsSdkCredentialsFeatures,
} from "@aws-sdk/types";
import type { IHttpRequest } from "@smithy/protocol-http";
import type { AwsCredentialIdentityProvider, BuildHandlerArguments, Provider } from "@smithy/types";

/**
 * @internal
 */
type PreviouslyResolved = Partial<{
  credentials?: AwsCredentialIdentityProvider;
  accountIdEndpointMode?: Provider<AccountIdEndpointMode>;
}>;

/**
 * @internal
 * Check for features that don't have a middleware activation site but
 * may be detected on the context, client config, or request.
 */
export async function checkFeatures(
  context: AwsHandlerExecutionContext,
  config: PreviouslyResolved,
  args: BuildHandlerArguments<any>
): Promise<void> {
  // eslint-disable-next-line
  const request = args.request as IHttpRequest;
  if (typeof config.accountIdEndpointMode === "function") {
    switch (await config.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature(context, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature(context, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature(context, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }

  if (typeof config.credentials === "function") {
    const credentials: AttributedAwsCredentialIdentity = await config.credentials?.();
    if (credentials.accountId) {
      setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature(context, key as keyof AwsSdkCredentialsFeatures, value);
    }
  }
}
