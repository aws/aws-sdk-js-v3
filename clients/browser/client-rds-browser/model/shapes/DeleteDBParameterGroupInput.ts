import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBParameterGroupName"],
  members: {
    DBParameterGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
