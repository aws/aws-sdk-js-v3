import { _ParametersList } from "./_ParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBParameterGroupName", "Parameters"],
  members: {
    DBParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _ParametersList
    }
  }
};
