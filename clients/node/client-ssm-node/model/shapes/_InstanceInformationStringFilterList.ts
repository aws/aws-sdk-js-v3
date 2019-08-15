import { List as _List_ } from "@aws-sdk/types";
import { _InstanceInformationStringFilter } from "./_InstanceInformationStringFilter";

export const _InstanceInformationStringFilterList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceInformationStringFilter
  }
};
