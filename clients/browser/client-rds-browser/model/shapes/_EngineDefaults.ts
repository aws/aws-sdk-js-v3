import { _ParametersList } from "./_ParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EngineDefaults: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBParameterGroupFamily: {
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
