import { List as _List_ } from "@aws-sdk/types";
import { _PartnerEventSource } from "./_PartnerEventSource";

export const _PartnerEventSourceList: _List_ = {
  type: "list",
  member: {
    shape: _PartnerEventSource
  }
};
