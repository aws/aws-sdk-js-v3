import { List as _List_ } from "@aws-sdk/types";
import { _Artwork } from "./_Artwork";

export const _Artworks: _List_ = {
  type: "list",
  member: {
    shape: _Artwork
  }
};
