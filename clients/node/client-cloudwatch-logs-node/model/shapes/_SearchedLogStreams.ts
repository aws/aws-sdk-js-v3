import { List as _List_ } from "@aws-sdk/types";
import { _SearchedLogStream } from "./_SearchedLogStream";

export const _SearchedLogStreams: _List_ = {
  type: "list",
  member: {
    shape: _SearchedLogStream
  }
};
