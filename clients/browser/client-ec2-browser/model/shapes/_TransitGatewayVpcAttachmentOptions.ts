import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayVpcAttachmentOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DnsSupport: {
      shape: {
        type: "string"
      },
      locationName: "dnsSupport"
    },
    Ipv6Support: {
      shape: {
        type: "string"
      },
      locationName: "ipv6Support"
    }
  }
};
