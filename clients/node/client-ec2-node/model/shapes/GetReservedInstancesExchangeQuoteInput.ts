import { _ReservedInstanceIdSet } from "./_ReservedInstanceIdSet";
import { _TargetConfigurationRequestSet } from "./_TargetConfigurationRequestSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReservedInstancesExchangeQuoteInput: _Structure_ = {
  type: "structure",
  required: ["ReservedInstanceIds"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ReservedInstanceIds: {
      shape: _ReservedInstanceIdSet,
      locationName: "ReservedInstanceId"
    },
    TargetConfigurations: {
      shape: _TargetConfigurationRequestSet,
      locationName: "TargetConfiguration"
    }
  }
};
