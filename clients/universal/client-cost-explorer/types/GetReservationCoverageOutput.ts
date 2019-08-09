import { _UnmarshalledCoverageByTime } from "./_CoverageByTime";
import { _UnmarshalledCoverage } from "./_Coverage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetReservationCoverageOutput shape
 */
export interface GetReservationCoverageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The amount of time that your reservations covered.</p>
   */
  CoveragesByTime: Array<_UnmarshalledCoverageByTime>;

  /**
   * <p>The total amount of instance usage that a reservation covered.</p>
   */
  Total?: _UnmarshalledCoverage;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
