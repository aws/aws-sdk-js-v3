import { _UserPoolListType } from "./_UserPoolListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserPoolsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPools: {
      shape: _UserPoolListType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
