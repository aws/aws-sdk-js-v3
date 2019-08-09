import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCachediSCSIVolumeInput: _Structure_ = {
  type: "structure",
  required: [
    "GatewayARN",
    "VolumeSizeInBytes",
    "TargetName",
    "NetworkInterfaceId",
    "ClientToken"
  ],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VolumeSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    TargetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SourceVolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    ClientToken: {
      shape: {
        type: "string",
        min: 5
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
