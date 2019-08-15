import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterImageInput: _Structure_ = {
  type: "structure",
  required: ["ImageId"],
  members: {
    ImageId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
