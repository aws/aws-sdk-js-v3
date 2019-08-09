import { _UnmarshalledResponsePartitionKey } from "./_ResponsePartitionKey";
import { _UnmarshalledDimensionKeyDescription } from "./_DimensionKeyDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDimensionKeysOutput shape
 */
export interface DescribeDimensionKeysOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The start time for the returned dimension keys, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>). <code>AlignedStartTime</code> will be less than or equal to the value of the user-specified <code>StartTime</code>.</p>
   */
  AlignedStartTime?: Date;

  /**
   * <p>The end time for the returned dimension keys, after alignment to a granular boundary (as specified by <code>PeriodInSeconds</code>). <code>AlignedEndTime</code> will be greater than or equal to the value of the user-specified <code>Endtime</code>.</p>
   */
  AlignedEndTime?: Date;

  /**
   * <p>If <code>PartitionBy</code> was present in the request, <code>PartitionKeys</code> contains the breakdown of dimension keys by the specified partitions.</p>
   */
  PartitionKeys?: Array<_UnmarshalledResponsePartitionKey>;

  /**
   * <p>The dimension keys that were requested.</p>
   */
  Keys?: Array<_UnmarshalledDimensionKeyDescription>;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by <code>MaxRecords</code>.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
