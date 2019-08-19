import { _FileShareUserList } from "./_FileShareUserList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSMBFileShareInput: _Structure_ = {
  type: "structure",
  required: ["FileShareARN"],
  members: {
    FileShareARN: {
      shape: {
        type: "string",
        min: 50
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
    DefaultStorageClass: {
      shape: {
        type: "string",
        min: 5
      }
    },
    ObjectACL: {
      shape: {
        type: "string"
      }
    },
    ReadOnly: {
      shape: {
        type: "boolean"
      }
    },
    GuessMIMETypeEnabled: {
      shape: {
        type: "boolean"
      }
    },
    RequesterPays: {
      shape: {
        type: "boolean"
      }
    },
    SMBACLEnabled: {
      shape: {
        type: "boolean"
      }
    },
    AdminUserList: {
      shape: _FileShareUserList
    },
    ValidUserList: {
      shape: _FileShareUserList
    },
    InvalidUserList: {
      shape: _FileShareUserList
    }
  }
};
