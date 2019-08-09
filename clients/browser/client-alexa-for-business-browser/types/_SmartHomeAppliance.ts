/**
 * <p>A smart home appliance that can connect to a central system. Any domestic device can be a smart appliance. </p>
 */
export interface _SmartHomeAppliance {
  /**
   * <p>The friendly name of the smart home appliance.</p>
   */
  FriendlyName?: string;

  /**
   * <p>The description of the smart home appliance.</p>
   */
  Description?: string;

  /**
   * <p>The name of the manufacturer of the smart home appliance.</p>
   */
  ManufacturerName?: string;
}

export type _UnmarshalledSmartHomeAppliance = _SmartHomeAppliance;
