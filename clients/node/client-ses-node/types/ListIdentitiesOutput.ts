import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of all identities that you have attempted to verify under your AWS account, regardless of verification status.</p>
 */
export interface ListIdentitiesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of identities.</p>
   */
  Identities: Array<string>;

  /**
   * <p>The token used for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
