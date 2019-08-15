import { _GraphqlApi } from "./_GraphqlApi";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGraphqlApiOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    graphqlApi: {
      shape: _GraphqlApi
    }
  }
};
