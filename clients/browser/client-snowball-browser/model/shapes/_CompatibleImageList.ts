import { List as _List_ } from "@aws-sdk/types";
import { _CompatibleImage } from "./_CompatibleImage";

export const _CompatibleImageList: _List_ = {
  type: "list",
  member: {
    shape: _CompatibleImage
  }
};
