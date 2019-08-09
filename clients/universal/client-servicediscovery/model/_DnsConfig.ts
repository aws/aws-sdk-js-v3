import { _DnsRecordList } from "./_DnsRecordList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DnsConfig: _Structure_ = {
  type: "structure",
  required: ["DnsRecords"],
  members: {
    NamespaceId: {
      shape: {
        type: "string"
      }
    },
    RoutingPolicy: {
      shape: {
        type: "string"
      }
    },
    DnsRecords: {
      shape: _DnsRecordList
    }
  }
};
