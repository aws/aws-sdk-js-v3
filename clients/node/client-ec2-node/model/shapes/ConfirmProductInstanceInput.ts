import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConfirmProductInstanceInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "ProductCode"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    ProductCode: {
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
