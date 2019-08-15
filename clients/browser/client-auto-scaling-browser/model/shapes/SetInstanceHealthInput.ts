import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetInstanceHealthInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "HealthStatus"],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HealthStatus: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ShouldRespectGracePeriod: {
      shape: {
        type: "boolean"
      }
    }
  }
};
