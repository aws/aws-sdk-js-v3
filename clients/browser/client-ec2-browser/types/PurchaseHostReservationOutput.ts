import { _UnmarshalledPurchase } from "./_Purchase";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PurchaseHostReservationOutput shape
 */
export interface PurchaseHostReservationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The currency in which the <code>totalUpfrontPrice</code> and <code>totalHourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>.</p>
   */
  CurrencyCode?: "USD" | string;

  /**
   * <p>Describes the details of the purchase.</p>
   */
  Purchase?: Array<_UnmarshalledPurchase>;

  /**
   * <p>The total hourly price of the reservation calculated per hour.</p>
   */
  TotalHourlyPrice?: string;

  /**
   * <p>The total amount charged to your account when you purchase the reservation.</p>
   */
  TotalUpfrontPrice?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
