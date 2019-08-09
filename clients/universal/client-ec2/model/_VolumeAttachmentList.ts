import { List as _List_ } from "@aws-sdk/types";
import { _VolumeAttachment } from "./_VolumeAttachment";

export const _VolumeAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _VolumeAttachment,
    locationName: "item"
  }
};
