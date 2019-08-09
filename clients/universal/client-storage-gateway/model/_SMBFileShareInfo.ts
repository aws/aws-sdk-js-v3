import { _FileShareUserList } from "./_FileShareUserList";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SMBFileShareInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FileShareARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    FileShareId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    FileShareStatus: {
      shape: {
        type: "string",
        min: 3
      }
    },
    GatewayARN: {
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
    Path: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string",
        min: 20
      }
    },
    LocationARN: {
      shape: {
        type: "string",
        min: 16
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
    },
    Authentication: {
      shape: {
        type: "string",
        min: 5
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
