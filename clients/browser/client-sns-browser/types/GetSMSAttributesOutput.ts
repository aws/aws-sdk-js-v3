import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response from the <code>GetSMSAttributes</code> request.</p>
 */
export interface GetSMSAttributesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The SMS attribute names and their values.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
