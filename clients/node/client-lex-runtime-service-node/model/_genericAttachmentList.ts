import { List as _List_ } from "@aws-sdk/types";
import { _GenericAttachment } from "./_GenericAttachment";

export const _genericAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _GenericAttachment
  }
};
