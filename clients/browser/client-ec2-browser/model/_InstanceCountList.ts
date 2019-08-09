import { List as _List_ } from "@aws-sdk/types";
import { _InstanceCount } from "./_InstanceCount";

export const _InstanceCountList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceCount,
    locationName: "item"
  }
};
