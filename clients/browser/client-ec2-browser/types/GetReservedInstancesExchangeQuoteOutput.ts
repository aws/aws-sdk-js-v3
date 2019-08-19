import { _UnmarshalledReservationValue } from "./_ReservationValue";
import { _UnmarshalledReservedInstanceReservationValue } from "./_ReservedInstanceReservationValue";
import { _UnmarshalledTargetReservationValue } from "./_TargetReservationValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of GetReservedInstancesExchangeQuote.</p>
 */
export interface GetReservedInstancesExchangeQuoteOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The currency of the transaction.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>If <code>true</code>, the exchange is valid. If <code>false</code>, the exchange cannot be completed.</p>
   */
  IsValidExchange?: boolean;

  /**
   * <p>The new end date of the reservation term.</p>
   */
  OutputReservedInstancesWillExpireAt?: Date;

  /**
   * <p>The total true upfront charge for the exchange.</p>
   */
  PaymentDue?: string;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  ReservedInstanceValueRollup?: _UnmarshalledReservationValue;

  /**
   * <p>The configuration of your Convertible Reserved Instances.</p>
   */
  ReservedInstanceValueSet?: Array<
    _UnmarshalledReservedInstanceReservationValue
  >;

  /**
   * <p>The cost associated with the Reserved Instance.</p>
   */
  TargetConfigurationValueRollup?: _UnmarshalledReservationValue;

  /**
   * <p>The values of the target Convertible Reserved Instances.</p>
   */
  TargetConfigurationValueSet?: Array<_UnmarshalledTargetReservationValue>;

  /**
   * <p>Describes the reason why the exchange cannot be completed.</p>
   */
  ValidationFailureReason?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
