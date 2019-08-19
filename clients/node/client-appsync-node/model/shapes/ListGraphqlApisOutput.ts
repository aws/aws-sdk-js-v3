import { _GraphqlApis } from "./_GraphqlApis";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGraphqlApisOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    graphqlApis: {
      shape: _GraphqlApis
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
