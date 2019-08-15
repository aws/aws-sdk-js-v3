import { _ReservedInstancesIdStringList } from "./_ReservedInstancesIdStringList";
import { _ReservedInstancesConfigurationList } from "./_ReservedInstancesConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyReservedInstancesInput: _Structure_ = {
  type: "structure",
  required: ["ReservedInstancesIds", "TargetConfigurations"],
  members: {
    ReservedInstancesIds: {
      shape: _ReservedInstancesIdStringList,
      locationName: "ReservedInstancesId"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    TargetConfigurations: {
      shape: _ReservedInstancesConfigurationList,
      locationName: "ReservedInstancesConfigurationSetItemType"
    }
  }
};
