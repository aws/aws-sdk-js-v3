import { List as _List_ } from "@aws-sdk/types";
import { _DomainInfo } from "./_DomainInfo";

export const _DomainInfoList: _List_ = {
  type: "list",
  member: {
    shape: _DomainInfo
  }
};
