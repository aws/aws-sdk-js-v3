import { setFeature } from "@aws-sdk/core";
import type { AccountIdEndpointMode } from "@aws-sdk/core/account-id-endpoint";
import type {
  AttributedAwsCredentialIdentity,
  AwsHandlerExecutionContext,
  AwsSdkCredentialsFeatures,
} from "@aws-sdk/types";
import type { IHttpRequest } from "@smithy/protocol-http";
import type {
  AwsCredentialIdentityProvider,
  BuildHandlerArguments,
  Provider,
  RetryStrategy,
  RetryStrategyV2,
} from "@smithy/types";

/**
 * @internal
 */
type PreviouslyResolved = Partial<{
  credentials?: AwsCredentialIdentityProvider;
  accountIdEndpointMode?: Provider<AccountIdEndpointMode>;
  retryStrategy?: Provider<RetryStrategy | RetryStrategyV2>;
}>;

/**
 * @internal
 */
const ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;

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
  const request = args.request as IHttpRequest;

  if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature(context, "PROTOCOL_RPC_V2_CBOR", "M");
  }

  if (typeof config.retryStrategy === "function") {
    const retryStrategy = await config.retryStrategy();
    if (typeof (retryStrategy as RetryStrategyV2).acquireInitialRetryToken === "function") {
      if (retryStrategy.constructor?.name?.includes("Adaptive")) {
        setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
      } else {
        setFeature(context, "RETRY_MODE_STANDARD", "E");
      }
    } else {
      if (retryStrategy.constructor?.name?.includes("Adaptive")) {
        setFeature(context, "RETRY_MODE_ADAPTIVE", "F");
      } else {
        setFeature(context, "RETRY_MODE_STANDARD", "E");
      }
    }
  }

  if (typeof config.accountIdEndpointMode === "function") {
    const endpointV2 = context.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature(context, "ACCOUNT_ID_ENDPOINT", "O");
    }
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

  // TODO: later version of @smithy/types has explicit typing for this.
  const identity = (context.__smithy_context?.selectedHttpAuthScheme as any)?.identity;

  if ((identity as AttributedAwsCredentialIdentity)?.$source) {
    const credentials = identity as AttributedAwsCredentialIdentity;
    if (credentials.accountId) {
      setFeature(context, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature(context, key as keyof AwsSdkCredentialsFeatures, value);
    }
  }
}
