import { List as _List_ } from "@aws-sdk/types";
import { _InstanceInformationFilter } from "./_InstanceInformationFilter";

export const _InstanceInformationFilterList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceInformationFilter
  }
};
