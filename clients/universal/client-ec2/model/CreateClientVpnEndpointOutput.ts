import { _ClientVpnEndpointStatus } from "./_ClientVpnEndpointStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClientVpnEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      },
      locationName: "clientVpnEndpointId"
    },
    Status: {
      shape: _ClientVpnEndpointStatus,
      locationName: "status"
    },
    DnsName: {
      shape: {
        type: "string"
      },
      locationName: "dnsName"
    }
  }
};
