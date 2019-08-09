import { _UnmarshalledDeleteFleetSuccessItem } from "./_DeleteFleetSuccessItem";
import { _UnmarshalledDeleteFleetErrorItem } from "./_DeleteFleetErrorItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteFleetsOutput shape
 */
export interface DeleteFleetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the EC2 Fleets that are successfully deleted.</p>
   */
  SuccessfulFleetDeletions?: Array<_UnmarshalledDeleteFleetSuccessItem>;

  /**
   * <p>Information about the EC2 Fleets that are not successfully deleted.</p>
   */
  UnsuccessfulFleetDeletions?: Array<_UnmarshalledDeleteFleetErrorItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
