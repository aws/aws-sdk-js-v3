import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Options: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VerifyMode: {
      shape: {
        type: "string"
      }
    },
    Atime: {
      shape: {
        type: "string"
      }
    },
    Mtime: {
      shape: {
        type: "string"
      }
    },
    Uid: {
      shape: {
        type: "string"
      }
    },
    Gid: {
      shape: {
        type: "string"
      }
    },
    PreserveDeletedFiles: {
      shape: {
        type: "string"
      }
    },
    PreserveDevices: {
      shape: {
        type: "string"
      }
    },
    PosixPermissions: {
      shape: {
        type: "string"
      }
    },
    BytesPerSecond: {
      shape: {
        type: "integer",
        min: -1
      }
    }
  }
};
