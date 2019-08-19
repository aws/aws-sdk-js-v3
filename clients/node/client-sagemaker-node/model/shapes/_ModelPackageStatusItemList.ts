import { List as _List_ } from "@aws-sdk/types";
import { _ModelPackageStatusItem } from "./_ModelPackageStatusItem";

export const _ModelPackageStatusItemList: _List_ = {
  type: "list",
  member: {
    shape: _ModelPackageStatusItem
  }
};
