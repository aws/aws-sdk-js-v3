import { _UnmarshalledPurchase } from "./_Purchase";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetHostReservationPurchasePreviewOutput shape
 */
export interface GetHostReservationPurchasePreviewOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and <code>totalHourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: "USD" | string;

  /**
   * <p>The purchase information of the Dedicated Host reservation and the Dedicated Hosts associated with it.</p>
   */
  Purchase?: Array<_UnmarshalledPurchase>;

  /**
   * <p>The potential total hourly price of the reservation per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The potential total upfront price. This is billed immediately.</p>
   */
  TotalUpfrontPrice?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
