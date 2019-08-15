import { List as _List_ } from "@aws-sdk/types";
import { _Playlist } from "./_Playlist";

export const _Playlists: _List_ = {
  type: "list",
  member: {
    shape: _Playlist
  }
};
