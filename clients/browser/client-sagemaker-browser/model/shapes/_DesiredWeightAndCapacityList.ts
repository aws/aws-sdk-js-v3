import { List as _List_ } from "@aws-sdk/types";
import { _DesiredWeightAndCapacity } from "./_DesiredWeightAndCapacity";

export const _DesiredWeightAndCapacityList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DesiredWeightAndCapacity
  }
};
