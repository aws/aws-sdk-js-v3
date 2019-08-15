import { _InventoryItemList } from "./_InventoryItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutInventoryInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "Items"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    Items: {
      shape: _InventoryItemList
    }
  }
};
