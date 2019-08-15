import { List as _List_ } from "@aws-sdk/types";
import { _AttachmentContent } from "./_AttachmentContent";

export const _AttachmentContentList: _List_ = {
  type: "list",
  member: {
    shape: _AttachmentContent
  }
};
