import {
  _SpotProvisioningSpecification,
  _UnmarshalledSpotProvisioningSpecification
} from "./_SpotProvisioningSpecification";

/**
 * <p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export interface _InstanceFleetProvisioningSpecifications {
  /**
   * <p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p>
   */
  SpotSpecification: _SpotProvisioningSpecification;
}

export interface _UnmarshalledInstanceFleetProvisioningSpecifications
  extends _InstanceFleetProvisioningSpecifications {
  /**
   * <p>The launch specification for Spot instances in the fleet, which determines the defined duration and provisioning timeout behavior.</p>
   */
  SpotSpecification: _UnmarshalledSpotProvisioningSpecification;
}
