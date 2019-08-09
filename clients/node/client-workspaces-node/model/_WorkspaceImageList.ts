import { List as _List_ } from "@aws-sdk/types";
import { _WorkspaceImage } from "./_WorkspaceImage";

export const _WorkspaceImageList: _List_ = {
  type: "list",
  member: {
    shape: _WorkspaceImage
  }
};
