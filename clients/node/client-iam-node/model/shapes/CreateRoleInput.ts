import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRoleInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "AssumeRolePolicyDocument"],
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
      shape: {
        type: "string",
        min: 20
      }
    },
    Tags: {
      shape: _tagListType
    }
  }
};
