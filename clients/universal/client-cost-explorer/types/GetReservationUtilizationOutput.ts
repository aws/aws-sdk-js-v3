import { _UnmarshalledUtilizationByTime } from "./_UtilizationByTime";
import { _UnmarshalledReservationAggregates } from "./_ReservationAggregates";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetReservationUtilizationOutput shape
 */
export interface GetReservationUtilizationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The amount of time that you used your RIs.</p>
   */
  UtilizationsByTime: Array<_UnmarshalledUtilizationByTime>;

  /**
   * <p>The total amount of time that you used your RIs.</p>
   */
  Total?: _UnmarshalledReservationAggregates;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
