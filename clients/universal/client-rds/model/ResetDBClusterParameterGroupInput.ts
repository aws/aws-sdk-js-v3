import { _ParametersList } from "./_ParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetDBClusterParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterParameterGroupName"],
  members: {
    DBClusterParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ResetAllParameters: {
      shape: {
        type: "boolean"
      }
    },
    Parameters: {
      shape: _ParametersList
    }
  }
};
