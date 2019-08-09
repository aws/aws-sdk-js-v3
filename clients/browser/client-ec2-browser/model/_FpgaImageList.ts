import { List as _List_ } from "@aws-sdk/types";
import { _FpgaImage } from "./_FpgaImage";

export const _FpgaImageList: _List_ = {
  type: "list",
  member: {
    shape: _FpgaImage,
    locationName: "item"
  }
};
