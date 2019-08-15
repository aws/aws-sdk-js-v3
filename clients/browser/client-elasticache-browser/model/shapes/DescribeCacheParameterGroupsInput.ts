import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheParameterGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheParameterGroupName: {
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
