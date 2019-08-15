import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModifyTransitGatewayVpcAttachmentRequestOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DnsSupport: {
      shape: {
        type: "string"
      }
    },
    Ipv6Support: {
      shape: {
        type: "string"
      }
    }
  }
};
