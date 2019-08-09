import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeConfiguration: _Structure_ = {
  type: "structure",
  required: ["InstanceType", "AvailabilityZone"],
  members: {
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    }
  }
};
