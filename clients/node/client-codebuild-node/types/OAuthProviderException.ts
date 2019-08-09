import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There was a problem with the underlying OAuth provider.</p>
 */
export interface OAuthProviderException
  extends __ServiceException__<_OAuthProviderExceptionDetails> {
  name: "OAuthProviderException";
}

export interface _OAuthProviderExceptionDetails {}
