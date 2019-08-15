import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteKeyPairInput: _Structure_ = {
  type: "structure",
  required: ["KeyName"],
  members: {
    KeyName: {
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
