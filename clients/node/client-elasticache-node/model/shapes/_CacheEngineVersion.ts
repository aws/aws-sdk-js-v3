import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheEngineVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    CacheParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    CacheEngineDescription: {
      shape: {
        type: "string"
      }
    },
    CacheEngineVersionDescription: {
      shape: {
        type: "string"
      }
    }
  }
};
