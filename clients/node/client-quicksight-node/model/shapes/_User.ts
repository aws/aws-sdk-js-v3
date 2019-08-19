import { Structure as _Structure_ } from "@aws-sdk/types";

export const _User: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Email: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    IdentityType: {
      shape: {
        type: "string"
      }
    },
    Active: {
      shape: {
        type: "boolean"
      }
    },
    PrincipalId: {
      shape: {
        type: "string"
      }
    }
  }
};
