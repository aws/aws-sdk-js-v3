import { List as _List_ } from "@aws-sdk/types";
import { _CreateJobPlaylist } from "./_CreateJobPlaylist";

export const _CreateJobPlaylists: _List_ = {
  type: "list",
  member: {
    shape: _CreateJobPlaylist
  }
};
