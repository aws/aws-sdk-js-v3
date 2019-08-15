import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDefaultSubnetInput: _Structure_ = {
  type: "structure",
  required: ["AvailabilityZone"],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
