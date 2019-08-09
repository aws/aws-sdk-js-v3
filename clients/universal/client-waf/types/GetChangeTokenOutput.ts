import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetChangeTokenOutput shape
 */
export interface GetChangeTokenOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>ChangeToken</code> that you used in the request. Use this value in a <code>GetChangeTokenStatus</code> request to get the current status of the request. </p>
   */
  ChangeToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
