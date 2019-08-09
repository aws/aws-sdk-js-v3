import { _AliasList } from "./_AliasList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Aliases: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _AliasList
    }
  }
};
