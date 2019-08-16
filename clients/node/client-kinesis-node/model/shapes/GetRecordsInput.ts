import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRecordsInput: _Structure_ = {
  type: "structure",
  required: ["ShardIterator"],
  members: {
    ShardIterator: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
