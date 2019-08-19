import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.</p>
 */
export interface IndexDocumentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the fields that are currently being indexed.</p>
   */
  FieldNames?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
