import { List as _List_ } from "@aws-sdk/types";
import { _KeyUsage } from "./_KeyUsage";

export const _KeyUsageList: _List_ = {
  type: "list",
  member: {
    shape: _KeyUsage
  }
};
