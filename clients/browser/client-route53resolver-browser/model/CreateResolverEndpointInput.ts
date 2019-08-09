import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { _IpAddressesRequest } from "./_IpAddressesRequest";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResolverEndpointInput: _Structure_ = {
  type: "structure",
  required: [
    "CreatorRequestId",
    "SecurityGroupIds",
    "Direction",
    "IpAddresses"
  ],
  members: {
    CreatorRequestId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIds
    },
    Direction: {
      shape: {
        type: "string"
      }
    },
    IpAddresses: {
      shape: _IpAddressesRequest
    },
    Tags: {
      shape: _TagList
    }
  }
};
