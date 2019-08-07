import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InventoryFilter: _Structure_ = {
  type: "structure",
  required: ["Prefix"],
  members: {
    Prefix: {
      shape: {
        type: "string"
      }
    }
  }
};
