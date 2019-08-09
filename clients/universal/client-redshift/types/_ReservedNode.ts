import {
  _RecurringCharge,
  _UnmarshalledRecurringCharge
} from "./_RecurringCharge";

/**
 * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. </p>
 */
export interface _ReservedNode {
  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier for the reserved node offering.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p>The node type of the reserved node.</p>
   */
  NodeType?: string;

  /**
   * <p>The time the reservation started. You purchase a reserved node offering for a duration. This is the start time of that duration.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The duration of the node reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed cost Amazon Redshift charges you for this reserved node.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly rate Amazon Redshift charges you for this reserved node.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved cluster.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The number of reserved compute nodes.</p>
   */
  NodeCount?: number;

  /**
   * <p>The state of the reserved compute node.</p> <p>Possible Values:</p> <ul> <li> <p>pending-payment-This reserved node has recently been purchased, and the sale has been approved, but payment has not yet been confirmed.</p> </li> <li> <p>active-This reserved node is owned by the caller and is available for use.</p> </li> <li> <p>payment-failed-Payment failed for the purchase attempt.</p> </li> <li> <p>retired-The reserved node is no longer available. </p> </li> <li> <p>exchanging-The owner is exchanging the reserved node for another reserved node.</p> </li> </ul>
   */
  State?: string;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node offering.</p>
   */
  OfferingType?: string;

  /**
   * <p>The recurring charges for the reserved node.</p>
   */
  RecurringCharges?: Array<_RecurringCharge> | Iterable<_RecurringCharge>;

  /**
   * <p/>
   */
  ReservedNodeOfferingType?: "Regular" | "Upgradable" | string;
}

export interface _UnmarshalledReservedNode extends _ReservedNode {
  /**
   * <p>The time the reservation started. You purchase a reserved node offering for a duration. This is the start time of that duration.</p>
   */
  StartTime?: Date;

  /**
   * <p>The recurring charges for the reserved node.</p>
   */
  RecurringCharges?: Array<_UnmarshalledRecurringCharge>;
}
