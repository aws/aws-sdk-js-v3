import { _UnmarshalledCancelSpotFleetRequestsSuccessItem } from "./_CancelSpotFleetRequestsSuccessItem";
import { _UnmarshalledCancelSpotFleetRequestsErrorItem } from "./_CancelSpotFleetRequestsErrorItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CancelSpotFleetRequests.</p>
 */
export interface CancelSpotFleetRequestsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Spot Fleet requests that are successfully canceled.</p>
   */
  SuccessfulFleetRequests?: Array<
    _UnmarshalledCancelSpotFleetRequestsSuccessItem
  >;

  /**
   * <p>Information about the Spot Fleet requests that are not successfully canceled.</p>
   */
  UnsuccessfulFleetRequests?: Array<
    _UnmarshalledCancelSpotFleetRequestsErrorItem
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
