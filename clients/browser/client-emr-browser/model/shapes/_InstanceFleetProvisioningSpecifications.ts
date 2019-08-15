import { _SpotProvisioningSpecification } from "./_SpotProvisioningSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceFleetProvisioningSpecifications: _Structure_ = {
  type: "structure",
  required: ["SpotSpecification"],
  members: {
    SpotSpecification: {
      shape: _SpotProvisioningSpecification
    }
  }
};
