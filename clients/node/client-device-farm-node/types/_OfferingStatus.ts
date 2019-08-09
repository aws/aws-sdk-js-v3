import { _Offering, _UnmarshalledOffering } from "./_Offering";

/**
 * <p>The status of the offering.</p>
 */
export interface _OfferingStatus {
  /**
   * <p>The type specified for the offering status.</p>
   */
  type?: "PURCHASE" | "RENEW" | "SYSTEM" | string;

  /**
   * <p>Represents the metadata of an offering status.</p>
   */
  offering?: _Offering;

  /**
   * <p>The number of available devices in the offering.</p>
   */
  quantity?: number;

  /**
   * <p>The date on which the offering is effective.</p>
   */
  effectiveOn?: Date | string | number;
}

export interface _UnmarshalledOfferingStatus extends _OfferingStatus {
  /**
   * <p>Represents the metadata of an offering status.</p>
   */
  offering?: _UnmarshalledOffering;

  /**
   * <p>The date on which the offering is effective.</p>
   */
  effectiveOn?: Date;
}
