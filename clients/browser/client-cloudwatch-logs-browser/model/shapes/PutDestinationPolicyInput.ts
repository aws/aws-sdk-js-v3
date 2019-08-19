import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDestinationPolicyInput: _Structure_ = {
  type: "structure",
  required: ["destinationName", "accessPolicy"],
  members: {
    destinationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    accessPolicy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
