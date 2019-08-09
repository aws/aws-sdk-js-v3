import { _UnmarshalledExport } from "./_Export";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListExportsOutput shape
 */
export interface ListExportsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The output for the <a>ListExports</a> action.</p>
   */
  Exports?: Array<_UnmarshalledExport>;

  /**
   * <p>If the output exceeds 100 exported output values, a string that identifies the next page of exports. If there is no additional page, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
