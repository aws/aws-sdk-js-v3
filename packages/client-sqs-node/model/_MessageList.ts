import { List as _List_ } from "@aws-sdk/types";
import { _Message } from "./_Message";

export const _MessageList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _Message,
    locationName: "Message"
  }
};
