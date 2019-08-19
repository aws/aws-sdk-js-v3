import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQueryExecutionInput: _Structure_ = {
  type: "structure",
  required: ["QueryExecutionId"],
  members: {
    QueryExecutionId: {
      shape: {
        type: "string"
      }
    }
  }
};
