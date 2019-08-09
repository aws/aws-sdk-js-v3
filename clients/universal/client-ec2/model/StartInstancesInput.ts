import { _InstanceIdStringList } from "./_InstanceIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartInstancesInput: _Structure_ = {
  type: "structure",
  required: ["InstanceIds"],
  members: {
    InstanceIds: {
      shape: _InstanceIdStringList,
      locationName: "InstanceId"
    },
    AdditionalInfo: {
      shape: {
        type: "string"
      },
      locationName: "additionalInfo"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
