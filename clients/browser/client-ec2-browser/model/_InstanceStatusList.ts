import { List as _List_ } from "@aws-sdk/types";
import { _InstanceStatus } from "./_InstanceStatus";

export const _InstanceStatusList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceStatus,
    locationName: "item"
  }
};
