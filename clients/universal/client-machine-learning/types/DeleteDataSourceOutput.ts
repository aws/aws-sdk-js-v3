import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Represents the output of a <code>DeleteDataSource</code> operation.</p>
 */
export interface DeleteDataSourceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>DataSource</code>. This value should be identical to the value of the <code>DataSourceID</code> in the request.</p>
   */
  DataSourceId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
