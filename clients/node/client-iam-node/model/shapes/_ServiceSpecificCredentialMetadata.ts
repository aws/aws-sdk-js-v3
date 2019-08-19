import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceSpecificCredentialMetadata: _Structure_ = {
  type: "structure",
  required: [
    "UserName",
    "Status",
    "ServiceUserName",
    "CreateDate",
    "ServiceSpecificCredentialId",
    "ServiceName"
  ],
  members: {
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
    },
    ServiceUserName: {
      shape: {
        type: "string",
        min: 17
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    ServiceSpecificCredentialId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    }
  }
};
