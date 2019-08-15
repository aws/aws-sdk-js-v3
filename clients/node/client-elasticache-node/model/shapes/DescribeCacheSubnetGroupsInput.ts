import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheSubnetGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheSubnetGroupName: {
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
