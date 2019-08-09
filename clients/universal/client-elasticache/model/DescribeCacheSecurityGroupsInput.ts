import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheSecurityGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheSecurityGroupName: {
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
