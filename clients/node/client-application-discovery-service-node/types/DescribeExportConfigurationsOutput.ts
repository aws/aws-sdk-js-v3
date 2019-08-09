import { _UnmarshalledExportInfo } from "./_ExportInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeExportConfigurationsOutput shape
 */
export interface DescribeExportConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p/>
   */
  exportsInfo?: Array<_UnmarshalledExportInfo>;

  /**
   * <p>The token from the previous call to describe-export-tasks.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
