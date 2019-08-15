import { List as _List_ } from "@aws-sdk/types";
import { _ExclusionPreview } from "./_ExclusionPreview";

export const _ExclusionPreviewList: _List_ = {
  type: "list",
  member: {
    shape: _ExclusionPreview
  }
};
