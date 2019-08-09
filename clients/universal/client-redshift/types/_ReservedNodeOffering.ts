import {
  _RecurringCharge,
  _UnmarshalledRecurringCharge
} from "./_RecurringCharge";

/**
 * <p>Describes a reserved node offering.</p>
 */
export interface _ReservedNodeOffering {
  /**
   * <p>The offering identifier.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p>The node type offered by the reserved node offering.</p>
   */
  NodeType?: string;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the node.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved node offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The rate you are charged for each hour the cluster that is using the offering is running.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the compute nodes offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node offering.</p>
   */
  OfferingType?: string;

  /**
   * <p>The charge to your account regardless of whether you are creating any clusters using the node offering. Recurring charges are only in effect for heavy-utilization reserved nodes.</p>
   */
  RecurringCharges?: Array<_RecurringCharge> | Iterable<_RecurringCharge>;

  /**
   * <p/>
   */
  ReservedNodeOfferingType?: "Regular" | "Upgradable" | string;
}

export interface _UnmarshalledReservedNodeOffering
  extends _ReservedNodeOffering {
  /**
   * <p>The charge to your account regardless of whether you are creating any clusters using the node offering. Recurring charges are only in effect for heavy-utilization reserved nodes.</p>
   */
  RecurringCharges?: Array<_UnmarshalledRecurringCharge>;
}
