import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response elements represent the output of a commit transaction request.</p>
 */
export interface CommitTransactionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the commit operation.</p>
   */
  transactionStatus?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
