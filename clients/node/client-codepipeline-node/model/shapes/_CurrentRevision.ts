import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CurrentRevision: _Structure_ = {
  type: "structure",
  required: ["revision", "changeIdentifier"],
  members: {
    revision: {
      shape: {
        type: "string",
        min: 1
      }
    },
    changeIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    created: {
      shape: {
        type: "timestamp"
      }
    },
    revisionSummary: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
