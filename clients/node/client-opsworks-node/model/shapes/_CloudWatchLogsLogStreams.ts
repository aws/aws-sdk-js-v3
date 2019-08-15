import { List as _List_ } from "@aws-sdk/types";
import { _CloudWatchLogsLogStream } from "./_CloudWatchLogsLogStream";

export const _CloudWatchLogsLogStreams: _List_ = {
  type: "list",
  member: {
    shape: _CloudWatchLogsLogStream
  }
};
