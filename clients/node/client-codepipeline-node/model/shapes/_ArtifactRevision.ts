import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ArtifactRevision: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
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
    revisionChangeIdentifier: {
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
    created: {
      shape: {
        type: "timestamp"
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
