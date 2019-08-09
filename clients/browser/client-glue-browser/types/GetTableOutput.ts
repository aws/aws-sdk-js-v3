import { _UnmarshalledTable } from "./_Table";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTableOutput shape
 */
export interface GetTableOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>Table</code> object that defines the specified table.</p>
   */
  Table?: _UnmarshalledTable;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
