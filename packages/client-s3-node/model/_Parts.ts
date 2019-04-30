import { List as _List_ } from "@aws-sdk/types";
import { _Part } from "./_Part";

export const _Parts: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _Part
  }
};
