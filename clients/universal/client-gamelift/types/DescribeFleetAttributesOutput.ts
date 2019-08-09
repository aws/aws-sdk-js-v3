import { _UnmarshalledFleetAttributes } from "./_FleetAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface DescribeFleetAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Collection of objects containing attribute metadata for each requested fleet ID.</p>
   */
  FleetAttributes?: Array<_UnmarshalledFleetAttributes>;

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
