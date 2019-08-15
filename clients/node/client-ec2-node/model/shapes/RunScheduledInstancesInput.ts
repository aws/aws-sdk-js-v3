import { _ScheduledInstancesLaunchSpecification } from "./_ScheduledInstancesLaunchSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunScheduledInstancesInput: _Structure_ = {
  type: "structure",
  required: ["LaunchSpecification", "ScheduledInstanceId"],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    LaunchSpecification: {
      shape: _ScheduledInstancesLaunchSpecification
    },
    ScheduledInstanceId: {
      shape: {
        type: "string"
      }
    }
  }
};
