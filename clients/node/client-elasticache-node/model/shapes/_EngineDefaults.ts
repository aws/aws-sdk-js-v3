import { _ParametersList } from "./_ParametersList";
import { _CacheNodeTypeSpecificParametersList } from "./_CacheNodeTypeSpecificParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EngineDefaults: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheParameterGroupFamily: {
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
    },
    CacheNodeTypeSpecificParameters: {
      shape: _CacheNodeTypeSpecificParametersList
    }
  }
};
