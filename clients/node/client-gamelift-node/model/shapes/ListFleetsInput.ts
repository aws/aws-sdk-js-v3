import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFleetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BuildId: {
      shape: {
        type: "string"
      }
    },
    ScriptId: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
