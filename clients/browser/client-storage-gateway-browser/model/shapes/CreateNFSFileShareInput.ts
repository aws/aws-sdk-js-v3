import { _NFSFileShareDefaults } from "./_NFSFileShareDefaults";
import { _FileShareClientList } from "./_FileShareClientList";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNFSFileShareInput: _Structure_ = {
  type: "structure",
  required: ["ClientToken", "GatewayARN", "Role", "LocationARN"],
  members: {
    ClientToken: {
      shape: {
        type: "string",
        min: 5
      }
    },
    NFSFileShareDefaults: {
      shape: _NFSFileShareDefaults
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
    },
    Tags: {
      shape: _Tags
    }
  }
};
