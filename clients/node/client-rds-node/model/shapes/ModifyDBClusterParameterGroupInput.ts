import { _ParametersList } from "./_ParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBClusterParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterParameterGroupName", "Parameters"],
  members: {
    DBClusterParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _ParametersList
    }
  }
};
