import { _InventoryResultEntityList } from "./_InventoryResultEntityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInventoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Entities: {
      shape: _InventoryResultEntityList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
