import { _IpAddressesResponse } from "./_IpAddressesResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResolverEndpointIpAddressesOutput: _Structure_ = {
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
    IpAddresses: {
      shape: _IpAddressesResponse
    }
  }
};
