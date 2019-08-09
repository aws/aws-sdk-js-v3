import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClusterParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["ParameterGroupName"],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
