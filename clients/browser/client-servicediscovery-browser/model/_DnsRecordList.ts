import { List as _List_ } from "@aws-sdk/types";
import { _DnsRecord } from "./_DnsRecord";

export const _DnsRecordList: _List_ = {
  type: "list",
  member: {
    shape: _DnsRecord
  }
};
