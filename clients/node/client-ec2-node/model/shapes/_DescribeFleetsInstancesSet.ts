import { List as _List_ } from "@aws-sdk/types";
import { _DescribeFleetsInstances } from "./_DescribeFleetsInstances";

export const _DescribeFleetsInstancesSet: _List_ = {
  type: "list",
  member: {
    shape: _DescribeFleetsInstances,
    locationName: "item"
  }
};
