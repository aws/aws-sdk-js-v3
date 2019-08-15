import { List as _List_ } from "@aws-sdk/types";
import { _AttachmentStateChange } from "./_AttachmentStateChange";

export const _AttachmentStateChanges: _List_ = {
  type: "list",
  member: {
    shape: _AttachmentStateChange
  }
};
