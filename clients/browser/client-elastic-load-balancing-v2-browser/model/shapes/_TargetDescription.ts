import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetDescription: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    }
  }
};
