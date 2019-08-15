import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExclusionsPreviewInput: _Structure_ = {
  type: "structure",
  required: ["assessmentTemplateArn", "previewToken"],
  members: {
    assessmentTemplateArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    previewToken: {
      shape: {
        type: "string"
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
    },
    locale: {
      shape: {
        type: "string"
      }
    }
  }
};
