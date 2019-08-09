import { _AttachedPermissionsBoundary } from "./_AttachedPermissionsBoundary";
import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Role: _Structure_ = {
  type: "structure",
  required: ["Path", "RoleName", "RoleId", "Arn", "CreateDate"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleId: {
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
    AssumeRolePolicyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    MaxSessionDuration: {
      shape: {
        type: "integer",
        min: 3600
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
