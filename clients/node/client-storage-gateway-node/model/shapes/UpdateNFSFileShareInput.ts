import { _NFSFileShareDefaults } from "./_NFSFileShareDefaults";
import { _FileShareClientList } from "./_FileShareClientList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateNFSFileShareInput: _Structure_ = {
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
    NFSFileShareDefaults: {
      shape: _NFSFileShareDefaults
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
    ClientList: {
      shape: _FileShareClientList
    },
    Squash: {
      shape: {
        type: "string",
        min: 5
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
    }
  }
};
