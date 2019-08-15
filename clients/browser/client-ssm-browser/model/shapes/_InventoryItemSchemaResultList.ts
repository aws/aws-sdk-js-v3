import { List as _List_ } from "@aws-sdk/types";
import { _InventoryItemSchema } from "./_InventoryItemSchema";

export const _InventoryItemSchemaResultList: _List_ = {
  type: "list",
  member: {
    shape: _InventoryItemSchema
  }
};
