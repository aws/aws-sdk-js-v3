import { _UnmarshalledEntityAggregate } from "./_EntityAggregate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEntityAggregatesOutput shape
 */
export interface DescribeEntityAggregatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of entities that are affected by each of the specified events.</p>
   */
  entityAggregates?: Array<_UnmarshalledEntityAggregate>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
