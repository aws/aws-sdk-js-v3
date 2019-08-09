import { _UnmarshalledSourceRegion } from "./_SourceRegion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.</p>
 */
export interface DescribeSourceRegionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>A list of SourceRegion instances that contains each source AWS Region that the current AWS Region can get a Read Replica or a DB snapshot from.</p>
   */
  SourceRegions?: Array<_UnmarshalledSourceRegion>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
