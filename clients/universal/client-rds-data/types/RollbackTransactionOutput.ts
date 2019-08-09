import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response elements represent the output of a request to perform a rollback of a
 *             transaction.</p>
 */
export interface RollbackTransactionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the rollback operation.</p>
   */
  transactionStatus?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
