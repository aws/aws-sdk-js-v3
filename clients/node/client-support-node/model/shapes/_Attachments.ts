import { List as _List_ } from "@aws-sdk/types";
import { _Attachment } from "./_Attachment";

export const _Attachments: _List_ = {
  type: "list",
  member: {
    shape: _Attachment
  }
};
