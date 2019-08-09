import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClassicLinkDnsSupport: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClassicLinkDnsSupported: {
      shape: {
        type: "boolean"
      },
      locationName: "classicLinkDnsSupported"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
