import { _Artworks } from "./_Artworks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobAlbumArt: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MergePolicy: {
      shape: {
        type: "string"
      }
    },
    Artwork: {
      shape: _Artworks
    }
  }
};
