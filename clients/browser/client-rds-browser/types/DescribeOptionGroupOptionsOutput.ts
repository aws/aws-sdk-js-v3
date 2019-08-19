import { _UnmarshalledOptionGroupOption } from "./_OptionGroupOption";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeOptionGroupOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of available option group options.</p>
   */
  OptionGroupOptions?: Array<_UnmarshalledOptionGroupOption>;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
