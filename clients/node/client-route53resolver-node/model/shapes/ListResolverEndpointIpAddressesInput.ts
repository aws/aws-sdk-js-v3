import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResolverEndpointIpAddressesInput: _Structure_ = {
  type: "structure",
  required: ["ResolverEndpointId"],
  members: {
    ResolverEndpointId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
