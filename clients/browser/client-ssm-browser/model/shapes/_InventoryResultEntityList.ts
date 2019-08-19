import { List as _List_ } from "@aws-sdk/types";
import { _InventoryResultEntity } from "./_InventoryResultEntity";

export const _InventoryResultEntityList: _List_ = {
  type: "list",
  member: {
    shape: _InventoryResultEntity
  }
};
