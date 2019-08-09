import { List as _List_ } from "@aws-sdk/types";
import { _ConditionalForwarder } from "./_ConditionalForwarder";

export const _ConditionalForwarders: _List_ = {
  type: "list",
  member: {
    shape: _ConditionalForwarder
  }
};
