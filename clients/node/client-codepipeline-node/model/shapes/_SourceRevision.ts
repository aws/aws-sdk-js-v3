import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceRevision: _Structure_ = {
  type: "structure",
  required: ["actionName"],
  members: {
    actionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revisionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revisionSummary: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revisionUrl: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
