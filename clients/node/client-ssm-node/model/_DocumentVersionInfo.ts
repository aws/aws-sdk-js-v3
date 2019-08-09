import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentVersionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    VersionName: {
      shape: {
        type: "string"
      }
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    IsDefaultVersion: {
      shape: {
        type: "boolean"
      }
    },
    DocumentFormat: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusInformation: {
      shape: {
        type: "string"
      }
    }
  }
};
