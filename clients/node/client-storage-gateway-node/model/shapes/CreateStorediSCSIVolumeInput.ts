import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStorediSCSIVolumeInput: _Structure_ = {
  type: "structure",
  required: [
    "GatewayARN",
    "DiskId",
    "PreserveExistingData",
    "TargetName",
    "NetworkInterfaceId"
  ],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    DiskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    PreserveExistingData: {
      shape: {
        type: "boolean"
      }
    },
    TargetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    KMSEncrypted: {
      shape: {
        type: "boolean"
      }
    },
    KMSKey: {
      shape: {
        type: "string",
        min: 7
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
