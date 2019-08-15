import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheParameterGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    CacheParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
