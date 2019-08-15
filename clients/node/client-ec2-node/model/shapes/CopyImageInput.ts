import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyImageInput: _Structure_ = {
  type: "structure",
  required: ["Name", "SourceImageId", "SourceRegion"],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      },
      locationName: "encrypted"
    },
    KmsKeyId: {
      shape: {
        type: "string"
      },
      locationName: "kmsKeyId"
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    SourceImageId: {
      shape: {
        type: "string"
      }
    },
    SourceRegion: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
