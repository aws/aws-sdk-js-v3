import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DnsEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DnsName: {
      shape: {
        type: "string"
      },
      locationName: "dnsName"
    },
    HostedZoneId: {
      shape: {
        type: "string"
      },
      locationName: "hostedZoneId"
    }
  }
};
