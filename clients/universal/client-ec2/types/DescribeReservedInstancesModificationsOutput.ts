import { _UnmarshalledReservedInstancesModification } from "./_ReservedInstancesModification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeReservedInstancesModifications.</p>
 */
export interface DescribeReservedInstancesModificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The Reserved Instance modification information.</p>
   */
  ReservedInstancesModifications?: Array<
    _UnmarshalledReservedInstancesModification
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
