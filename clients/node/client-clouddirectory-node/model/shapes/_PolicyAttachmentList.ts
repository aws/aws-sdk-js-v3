import { List as _List_ } from "@aws-sdk/types";
import { _PolicyAttachment } from "./_PolicyAttachment";

export const _PolicyAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _PolicyAttachment
  }
};
