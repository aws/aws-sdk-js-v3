import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FlowTemplateSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    revisionNumber: {
      shape: {
        type: "integer"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
