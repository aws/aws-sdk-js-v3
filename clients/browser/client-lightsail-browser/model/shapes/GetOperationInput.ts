import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOperationInput: _Structure_ = {
  type: "structure",
  required: ["operationId"],
  members: {
    operationId: {
      shape: {
        type: "string"
      }
    }
  }
};
