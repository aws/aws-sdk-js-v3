import { List as _List_ } from "@aws-sdk/types";
import { _Image } from "./_Image";

export const _ImageList: _List_ = {
  type: "list",
  member: {
    shape: _Image,
    locationName: "item"
  }
};
