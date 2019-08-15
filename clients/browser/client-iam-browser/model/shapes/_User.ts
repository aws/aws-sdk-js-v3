import { _AttachedPermissionsBoundary } from "./_AttachedPermissionsBoundary";
import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _User: _Structure_ = {
  type: "structure",
  required: ["Path", "UserName", "UserId", "Arn", "CreateDate"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserId: {
      shape: {
        type: "string",
        min: 16
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    PasswordLastUsed: {
      shape: {
        type: "timestamp"
      }
    },
    PermissionsBoundary: {
      shape: _AttachedPermissionsBoundary
    },
    Tags: {
      shape: _tagListType
    }
  }
};
