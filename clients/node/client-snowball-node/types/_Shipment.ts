/**
 * <p>The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.</p>
 */
export interface _Shipment {
  /**
   * <p>Status information for a shipment.</p>
   */
  Status?: string;

  /**
   * <p>The tracking number for this job. Using this tracking number with your region's carrier's website, you can track a Snowball as the carrier transports it.</p> <p>For India, the carrier is Amazon Logistics. For all other regions, UPS is the carrier.</p>
   */
  TrackingNumber?: string;
}

export type _UnmarshalledShipment = _Shipment;
