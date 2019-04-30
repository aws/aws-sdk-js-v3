import { _IdentityPoolsList } from "./_IdentityPoolsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIdentityPoolsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityPools: {
      shape: _IdentityPoolsList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
