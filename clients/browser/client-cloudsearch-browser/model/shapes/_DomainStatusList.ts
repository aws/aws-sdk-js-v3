import { List as _List_ } from "@aws-sdk/types";
import { _DomainStatus } from "./_DomainStatus";

export const _DomainStatusList: _List_ = {
  type: "list",
  member: {
    shape: _DomainStatus
  }
};
