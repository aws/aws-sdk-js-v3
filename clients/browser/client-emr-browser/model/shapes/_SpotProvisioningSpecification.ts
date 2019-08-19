import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotProvisioningSpecification: _Structure_ = {
  type: "structure",
  required: ["TimeoutDurationMinutes", "TimeoutAction"],
  members: {
    TimeoutDurationMinutes: {
      shape: {
        type: "integer"
      }
    },
    TimeoutAction: {
      shape: {
        type: "string"
      }
    },
    BlockDurationMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
