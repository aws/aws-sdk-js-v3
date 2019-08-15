import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheEngineVersionsInput: _Structure_ = {
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
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    DefaultOnly: {
      shape: {
        type: "boolean"
      }
    }
  }
};
