import { _Credentials } from "./_Credentials";
import { _AssumedRoleUser } from "./_AssumedRoleUser";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssumeRoleWithWebIdentityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Credentials: {
      shape: _Credentials
    },
    SubjectFromWebIdentityToken: {
      shape: {
        type: "string",
        min: 6
      }
    },
    AssumedRoleUser: {
      shape: _AssumedRoleUser
    },
    PackedPolicySize: {
      shape: {
        type: "integer"
      }
    },
    Provider: {
      shape: {
        type: "string"
      }
    },
    Audience: {
      shape: {
        type: "string"
      }
    }
  }
};
