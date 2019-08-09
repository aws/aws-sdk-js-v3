import { _UnmarshalledRelatedObservations } from "./_RelatedObservations";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProblemObservationsOutput shape
 */
export interface DescribeProblemObservationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Observations related to the problem.</p>
   */
  RelatedObservations?: _UnmarshalledRelatedObservations;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
