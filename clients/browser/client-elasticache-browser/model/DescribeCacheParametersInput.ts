import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheParametersInput: _Structure_ = {
  type: "structure",
  required: ["CacheParameterGroupName"],
  members: {
    CacheParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    Source: {
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
    }
  }
};
