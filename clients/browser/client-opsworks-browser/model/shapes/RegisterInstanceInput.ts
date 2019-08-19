import { _InstanceIdentity } from "./_InstanceIdentity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterInstanceInput: _Structure_ = {
  type: "structure",
  required: ["StackId"],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    Hostname: {
      shape: {
        type: "string"
      }
    },
    PublicIp: {
      shape: {
        type: "string"
      }
    },
    PrivateIp: {
      shape: {
        type: "string"
      }
    },
    RsaPublicKey: {
      shape: {
        type: "string"
      }
    },
    RsaPublicKeyFingerprint: {
      shape: {
        type: "string"
      }
    },
    InstanceIdentity: {
      shape: _InstanceIdentity
    }
  }
};
