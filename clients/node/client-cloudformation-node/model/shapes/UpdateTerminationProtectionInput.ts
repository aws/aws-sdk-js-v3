import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTerminationProtectionInput: _Structure_ = {
  type: "structure",
  required: ["EnableTerminationProtection", "StackName"],
  members: {
    EnableTerminationProtection: {
      shape: {
        type: "boolean"
      }
    },
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
