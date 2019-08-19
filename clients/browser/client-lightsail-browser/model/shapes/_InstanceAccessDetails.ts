import { _PasswordData } from "./_PasswordData";
import { _HostKeysList } from "./_HostKeysList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceAccessDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certKey: {
      shape: {
        type: "string"
      }
    },
    expiresAt: {
      shape: {
        type: "timestamp"
      }
    },
    ipAddress: {
      shape: {
        type: "string"
      }
    },
    password: {
      shape: {
        type: "string"
      }
    },
    passwordData: {
      shape: _PasswordData
    },
    privateKey: {
      shape: {
        type: "string"
      }
    },
    protocol: {
      shape: {
        type: "string"
      }
    },
    instanceName: {
      shape: {
        type: "string"
      }
    },
    username: {
      shape: {
        type: "string"
      }
    },
    hostKeys: {
      shape: _HostKeysList
    }
  }
};
