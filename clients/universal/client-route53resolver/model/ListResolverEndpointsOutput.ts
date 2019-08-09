import { _ResolverEndpoints } from "./_ResolverEndpoints";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResolverEndpointsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ResolverEndpoints: {
      shape: _ResolverEndpoints
    }
  }
};
