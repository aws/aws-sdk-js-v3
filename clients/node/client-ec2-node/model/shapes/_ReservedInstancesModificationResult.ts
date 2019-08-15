import { _ReservedInstancesConfiguration } from "./_ReservedInstancesConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedInstancesModificationResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedInstancesId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesId"
    },
    TargetConfiguration: {
      shape: _ReservedInstancesConfiguration,
      locationName: "targetConfiguration"
    }
  }
};
