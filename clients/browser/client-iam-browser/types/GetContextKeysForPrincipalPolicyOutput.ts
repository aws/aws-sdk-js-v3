import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. </p>
 */
export interface GetContextKeysForPrincipalPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of context keys that are referenced in the input policies.</p>
   */
  ContextKeyNames?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
