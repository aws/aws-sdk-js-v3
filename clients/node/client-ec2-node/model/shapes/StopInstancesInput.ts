import { _InstanceIdStringList } from "./_InstanceIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopInstancesInput: _Structure_ = {
  type: "structure",
  required: ["InstanceIds"],
  members: {
    InstanceIds: {
      shape: _InstanceIdStringList,
      locationName: "InstanceId"
    },
    Hibernate: {
      shape: {
        type: "boolean"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Force: {
      shape: {
        type: "boolean"
      },
      locationName: "force"
    }
  }
};
