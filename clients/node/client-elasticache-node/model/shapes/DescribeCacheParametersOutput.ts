import { _ParametersList } from "./_ParametersList";
import { _CacheNodeTypeSpecificParametersList } from "./_CacheNodeTypeSpecificParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
