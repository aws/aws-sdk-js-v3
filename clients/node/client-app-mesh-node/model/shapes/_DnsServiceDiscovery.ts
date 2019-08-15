import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DnsServiceDiscovery: _Structure_ = {
  type: "structure",
  required: ["hostname"],
  members: {
    hostname: {
      shape: {
        type: "string"
      }
    }
  }
};
