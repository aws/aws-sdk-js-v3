import { _IpAddressUpdate } from "./_IpAddressUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateResolverEndpointIpAddressInput: _Structure_ = {
  type: "structure",
  required: ["ResolverEndpointId", "IpAddress"],
  members: {
    ResolverEndpointId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IpAddress: {
      shape: _IpAddressUpdate
    }
  }
};
