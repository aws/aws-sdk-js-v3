import { List as _List_ } from "@aws-sdk/types";
import { _Message } from "./_Message";

export const _MessageList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Message
  }
};
