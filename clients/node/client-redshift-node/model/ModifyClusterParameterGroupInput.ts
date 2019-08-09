import { _ParametersList } from "./_ParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["ParameterGroupName", "Parameters"],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _ParametersList
    }
  }
};
