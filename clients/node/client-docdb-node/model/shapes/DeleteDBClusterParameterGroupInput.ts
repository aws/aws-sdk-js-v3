import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBClusterParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterParameterGroupName"],
  members: {
    DBClusterParameterGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
