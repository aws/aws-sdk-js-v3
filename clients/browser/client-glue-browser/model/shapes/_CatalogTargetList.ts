import { List as _List_ } from "@aws-sdk/types";
import { _CatalogTarget } from "./_CatalogTarget";

export const _CatalogTargetList: _List_ = {
  type: "list",
  member: {
    shape: _CatalogTarget
  }
};
