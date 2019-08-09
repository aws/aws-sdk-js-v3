import { _SearchedAttributeNamesListType } from "./_SearchedAttributeNamesListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AttributesToGet: {
      shape: _SearchedAttributeNamesListType
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filter: {
      shape: {
        type: "string"
      }
    }
  }
};
