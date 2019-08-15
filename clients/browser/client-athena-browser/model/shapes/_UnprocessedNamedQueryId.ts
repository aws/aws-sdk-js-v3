import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UnprocessedNamedQueryId: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NamedQueryId: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
