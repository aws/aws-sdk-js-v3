import { _SnapshotDetailList } from "./_SnapshotDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportImageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Architecture: {
      shape: {
        type: "string"
      },
      locationName: "architecture"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Encrypted: {
      shape: {
        type: "boolean"
      },
      locationName: "encrypted"
    },
    Hypervisor: {
      shape: {
        type: "string"
      },
      locationName: "hypervisor"
    },
    ImageId: {
      shape: {
        type: "string"
      },
      locationName: "imageId"
    },
    ImportTaskId: {
      shape: {
        type: "string"
      },
      locationName: "importTaskId"
    },
    KmsKeyId: {
      shape: {
        type: "string"
      },
      locationName: "kmsKeyId"
    },
    LicenseType: {
      shape: {
        type: "string"
      },
      locationName: "licenseType"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    },
    Progress: {
      shape: {
        type: "string"
      },
      locationName: "progress"
    },
    SnapshotDetails: {
      shape: _SnapshotDetailList,
      locationName: "snapshotDetailSet"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    }
  }
};
