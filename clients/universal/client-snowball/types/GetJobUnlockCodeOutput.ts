import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetJobUnlockCodeOutput shape
 */
export interface GetJobUnlockCodeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>UnlockCode</code> value for the specified job. The <code>UnlockCode</code> value can be accessed for up to 90 days after the job has been created.</p>
   */
  UnlockCode?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
