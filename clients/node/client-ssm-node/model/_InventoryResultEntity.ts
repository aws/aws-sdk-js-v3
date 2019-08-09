import { _InventoryResultItemMap } from "./_InventoryResultItemMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryResultEntity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Data: {
      shape: _InventoryResultItemMap
    }
  }
};
