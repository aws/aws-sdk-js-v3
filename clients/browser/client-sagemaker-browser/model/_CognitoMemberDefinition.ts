import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CognitoMemberDefinition: _Structure_ = {
  type: "structure",
  required: ["UserPool", "UserGroup", "ClientId"],
  members: {
    UserPool: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
