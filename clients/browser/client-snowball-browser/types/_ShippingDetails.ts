import { _Shipment, _UnmarshalledShipment } from "./_Shipment";

/**
 * <p>A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.</p>
 */
export interface _ShippingDetails {
  /**
   * <p>The shipping speed for a particular job. This speed doesn't dictate how soon you'll get the Snowball from the job's creation date. This speed represents how quickly it moves to its destination while in transit. Regional shipping speeds are as follows:</p> <ul> <li> <p>In Australia, you have access to express shipping. Typically, Snowballs shipped express are delivered in about a day.</p> </li> <li> <p>In the European Union (EU), you have access to express shipping. Typically, Snowballs shipped express are delivered in about a day. In addition, most countries in the EU have access to standard shipping, which typically takes less than a week, one way.</p> </li> <li> <p>In India, Snowballs are delivered in one to seven days.</p> </li> <li> <p>In the United States of America (US), you have access to one-day shipping and two-day shipping.</p> </li> </ul>
   */
  ShippingOption?: "SECOND_DAY" | "NEXT_DAY" | "EXPRESS" | "STANDARD" | string;

  /**
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snowball being returned to AWS for a particular job.</p>
   */
  InboundShipment?: _Shipment;

  /**
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snowball being delivered to the address that you specified for a particular job.</p>
   */
  OutboundShipment?: _Shipment;
}

export interface _UnmarshalledShippingDetails extends _ShippingDetails {
  /**
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snowball being returned to AWS for a particular job.</p>
   */
  InboundShipment?: _UnmarshalledShipment;

  /**
   * <p>The <code>Status</code> and <code>TrackingNumber</code> values for a Snowball being delivered to the address that you specified for a particular job.</p>
   */
  OutboundShipment?: _UnmarshalledShipment;
}
