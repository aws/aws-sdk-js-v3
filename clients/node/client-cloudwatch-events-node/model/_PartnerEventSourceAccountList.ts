import { List as _List_ } from "@aws-sdk/types";
import { _PartnerEventSourceAccount } from "./_PartnerEventSourceAccount";

export const _PartnerEventSourceAccountList: _List_ = {
  type: "list",
  member: {
    shape: _PartnerEventSourceAccount
  }
};
