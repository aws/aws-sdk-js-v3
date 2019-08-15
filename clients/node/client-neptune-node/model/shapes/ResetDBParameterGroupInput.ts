import { _ParametersList } from "./_ParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetDBParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBParameterGroupName"],
  members: {
    DBParameterGroupName: {
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
