import { _Resolvers } from "./_Resolvers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResolversByFunctionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resolvers: {
      shape: _Resolvers
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
