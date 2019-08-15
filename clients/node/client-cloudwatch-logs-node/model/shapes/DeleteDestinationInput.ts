import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDestinationInput: _Structure_ = {
  type: "structure",
  required: ["destinationName"],
  members: {
    destinationName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
