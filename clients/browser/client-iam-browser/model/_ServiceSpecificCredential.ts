import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceSpecificCredential: _Structure_ = {
  type: "structure",
  required: [
    "CreateDate",
    "ServiceName",
    "ServiceUserName",
    "ServicePassword",
    "ServiceSpecificCredentialId",
    "UserName",
    "Status"
  ],
  members: {
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    ServiceUserName: {
      shape: {
        type: "string",
        min: 17
      }
    },
    ServicePassword: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    ServiceSpecificCredentialId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
