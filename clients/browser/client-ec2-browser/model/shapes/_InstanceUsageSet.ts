import { List as _List_ } from "@aws-sdk/types";
import { _InstanceUsage } from "./_InstanceUsage";

export const _InstanceUsageSet: _List_ = {
  type: "list",
  member: {
    shape: _InstanceUsage,
    locationName: "item"
  }
};
