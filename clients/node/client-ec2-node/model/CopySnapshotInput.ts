import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopySnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SourceRegion", "SourceSnapshotId"],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    DestinationRegion: {
      shape: {
        type: "string"
      },
      locationName: "destinationRegion"
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
    PresignedUrl: {
      shape: {
        type: "string"
      },
      locationName: "presignedUrl"
    },
    SourceRegion: {
      shape: {
        type: "string"
      }
    },
    SourceSnapshotId: {
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
