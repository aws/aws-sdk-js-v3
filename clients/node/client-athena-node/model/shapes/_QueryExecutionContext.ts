import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryExecutionContext: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Database: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
