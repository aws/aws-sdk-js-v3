import { List as _List_ } from "@aws-sdk/types";
import { _IndexAttachment } from "./_IndexAttachment";

export const _IndexAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _IndexAttachment
  }
};
