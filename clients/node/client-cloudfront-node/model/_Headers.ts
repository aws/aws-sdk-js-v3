import { _HeaderList } from "./_HeaderList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Headers: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _HeaderList
    }
  }
};
