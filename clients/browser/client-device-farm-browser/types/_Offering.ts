import {
  _RecurringCharge,
  _UnmarshalledRecurringCharge
} from "./_RecurringCharge";

/**
 * <p>Represents the metadata of a device offering.</p>
 */
export interface _Offering {
  /**
   * <p>The ID that corresponds to a device offering.</p>
   */
  id?: string;

  /**
   * <p>A string describing the offering.</p>
   */
  description?: string;

  /**
   * <p>The type of offering (e.g., "RECURRING") for a device.</p>
   */
  type?: "RECURRING" | string;

  /**
   * <p>The platform of the device (e.g., ANDROID or IOS).</p>
   */
  platform?: "ANDROID" | "IOS" | string;

  /**
   * <p>Specifies whether there are recurring charges for the offering.</p>
   */
  recurringCharges?: Array<_RecurringCharge> | Iterable<_RecurringCharge>;
}

export interface _UnmarshalledOffering extends _Offering {
  /**
   * <p>Specifies whether there are recurring charges for the offering.</p>
   */
  recurringCharges?: Array<_UnmarshalledRecurringCharge>;
}
