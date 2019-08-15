import { _CacheNodeTypeSpecificValueList } from "./_CacheNodeTypeSpecificValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheNodeTypeSpecificParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Source: {
      shape: {
        type: "string"
      }
    },
    DataType: {
      shape: {
        type: "string"
      }
    },
    AllowedValues: {
      shape: {
        type: "string"
      }
    },
    IsModifiable: {
      shape: {
        type: "boolean"
      }
    },
    MinimumEngineVersion: {
      shape: {
        type: "string"
      }
    },
    CacheNodeTypeSpecificValues: {
      shape: _CacheNodeTypeSpecificValueList
    },
    ChangeType: {
      shape: {
        type: "string"
      }
    }
  }
};
