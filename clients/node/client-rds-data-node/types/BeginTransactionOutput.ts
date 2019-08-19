import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response elements represent the output of a request to start a SQL
 *             transaction.</p>
 */
export interface BeginTransactionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The transaction ID of the transaction started by the call.</p>
   */
  transactionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
