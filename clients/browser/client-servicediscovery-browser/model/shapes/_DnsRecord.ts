import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DnsRecord: _Structure_ = {
  type: "structure",
  required: ["Type", "TTL"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    TTL: {
      shape: {
        type: "integer"
      }
    }
  }
};
