import { _UnmarshalledTable } from "./_Table";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTablesOutput shape
 */
export interface GetTablesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the requested <code>Table</code> objects.</p>
   */
  TableList?: Array<_UnmarshalledTable>;

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
