import { List as _List_ } from "@aws-sdk/types";
import { _AttachmentDetails } from "./_AttachmentDetails";

export const _AttachmentSet: _List_ = {
  type: "list",
  member: {
    shape: _AttachmentDetails
  }
};
