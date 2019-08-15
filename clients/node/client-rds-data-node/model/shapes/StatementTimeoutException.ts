import { Structure as _Structure_ } from "@aws-sdk/types";

export const StatementTimeoutException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    dbConnectionId: {
      shape: {
        type: "integer"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "StatementTimeoutException",
  exceptionCode: "StatementTimeoutException"
};
