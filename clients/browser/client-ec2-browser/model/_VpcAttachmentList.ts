import { List as _List_ } from "@aws-sdk/types";
import { _VpcAttachment } from "./_VpcAttachment";

export const _VpcAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _VpcAttachment,
    locationName: "item"
  }
};
