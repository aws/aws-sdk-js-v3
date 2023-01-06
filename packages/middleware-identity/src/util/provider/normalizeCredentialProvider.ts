import { memoize } from "@aws-sdk/property-provider";
import { AwsCredentialIdentity, MemoizedProvider,Provider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { CREDENTIAL_EXPIRE_WINDOW } from "../../configurations";

const normalizeCredentialProvider = (
    credentials: AwsCredentialIdentity | Provider<AwsCredentialIdentity>
  ): MemoizedProvider<AwsCredentialIdentity> => {
    if (typeof credentials === "function") {
      return memoize(
        credentials,
        (credentials) =>
          credentials.expiration !== undefined &&
          credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW,
        (credentials) => credentials.expiration !== undefined
      );
    }
    return normalizeProvider(credentials);
  };
  