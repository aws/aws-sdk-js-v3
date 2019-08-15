import { List as _List_ } from "@aws-sdk/types";
import { _Message } from "./_Message";

export const _Messages: _List_ = {
  type: "list",
  member: {
    shape: _Message
  }
};
