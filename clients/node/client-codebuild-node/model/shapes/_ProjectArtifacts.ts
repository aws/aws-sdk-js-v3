import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectArtifacts: _Structure_ = {
  type: "structure",
  required: ["type"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: {
        type: "string"
      }
    },
    path: {
      shape: {
        type: "string"
      }
    },
    namespaceType: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    packaging: {
      shape: {
        type: "string"
      }
    },
    overrideArtifactName: {
      shape: {
        type: "boolean"
      }
    },
    encryptionDisabled: {
      shape: {
        type: "boolean"
      }
    },
    artifactIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
