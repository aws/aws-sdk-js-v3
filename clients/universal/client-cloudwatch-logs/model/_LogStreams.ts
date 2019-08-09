import { List as _List_ } from "@aws-sdk/types";
import { _LogStream } from "./_LogStream";

export const _LogStreams: _List_ = {
  type: "list",
  member: {
    shape: _LogStream
  }
};
