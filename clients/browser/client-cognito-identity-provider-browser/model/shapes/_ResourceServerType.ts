import { _ResourceServerScopeListType } from "./_ResourceServerScopeListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceServerType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Identifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Scopes: {
      shape: _ResourceServerScopeListType
    }
  }
};
