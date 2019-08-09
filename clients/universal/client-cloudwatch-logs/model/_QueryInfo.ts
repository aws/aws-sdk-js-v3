import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    queryId: {
      shape: {
        type: "string"
      }
    },
    queryString: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    createTime: {
      shape: {
        type: "integer"
      }
    },
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
