import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFlowTemplateRevisionsInput: _Structure_ = {
  type: "structure",
  required: ["id"],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
