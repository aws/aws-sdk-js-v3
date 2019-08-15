import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendSSHPublicKeyInput: _Structure_ = {
  type: "structure",
  required: [
    "InstanceId",
    "InstanceOSUser",
    "SSHPublicKey",
    "AvailabilityZone"
  ],
  members: {
    InstanceId: {
      shape: {
        type: "string",
        min: 10
      }
    },
    InstanceOSUser: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SSHPublicKey: {
      shape: {
        type: "string",
        min: 256
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string",
        min: 6
      }
    }
  }
};
