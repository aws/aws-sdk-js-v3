/**
 * <p>Information about the instances that belong to the replacement environment in a blue/green deployment.</p>
 */
export interface _GreenFleetProvisioningOption {
  /**
   * <p>The method used to add instances to a replacement environment.</p> <ul> <li> <p>DISCOVER_EXISTING: Use instances that already exist or will be created manually.</p> </li> <li> <p>COPY_AUTO_SCALING_GROUP: Use settings from a specified Auto Scaling group to define and create instances in a new Auto Scaling group.</p> </li> </ul>
   */
  action?: "DISCOVER_EXISTING" | "COPY_AUTO_SCALING_GROUP" | string;
}

export type _UnmarshalledGreenFleetProvisioningOption = _GreenFleetProvisioningOption;
