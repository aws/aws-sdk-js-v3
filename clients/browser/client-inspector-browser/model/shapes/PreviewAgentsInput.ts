import { Structure as _Structure_ } from "@aws-sdk/types";

export const PreviewAgentsInput: _Structure_ = {
  type: "structure",
  required: ["previewAgentsArn"],
  members: {
    previewAgentsArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
