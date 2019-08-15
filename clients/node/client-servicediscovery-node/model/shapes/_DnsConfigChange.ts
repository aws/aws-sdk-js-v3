import { _DnsRecordList } from "./_DnsRecordList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DnsConfigChange: _Structure_ = {
  type: "structure",
  required: ["DnsRecords"],
  members: {
    DnsRecords: {
      shape: _DnsRecordList
    }
  }
};
