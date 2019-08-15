import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BuildArtifacts: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    location: {
      shape: {
        type: "string"
      }
    },
    sha256sum: {
      shape: {
        type: "string"
      }
    },
    md5sum: {
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
