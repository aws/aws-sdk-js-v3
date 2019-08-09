import { List as _List_ } from "@aws-sdk/types";
import { _AttachmentInformation } from "./_AttachmentInformation";

export const _AttachmentInformationList: _List_ = {
  type: "list",
  member: {
    shape: _AttachmentInformation
  }
};
