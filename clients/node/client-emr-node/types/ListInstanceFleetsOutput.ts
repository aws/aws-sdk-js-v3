import { _UnmarshalledInstanceFleet } from "./_InstanceFleet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListInstanceFleetsOutput shape
 */
export interface ListInstanceFleetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of instance fleets for the cluster and given filters.</p>
   */
  InstanceFleets?: Array<_UnmarshalledInstanceFleet>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
