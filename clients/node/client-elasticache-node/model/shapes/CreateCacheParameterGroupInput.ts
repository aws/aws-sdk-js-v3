import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCacheParameterGroupInput: _Structure_ = {
  type: "structure",
  required: [
    "CacheParameterGroupName",
    "CacheParameterGroupFamily",
    "Description"
  ],
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
