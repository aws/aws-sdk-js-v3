import { _ParametersList } from "./_ParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DefaultClusterParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _ParametersList
    }
  }
};
