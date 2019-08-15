import { List as _List_ } from "@aws-sdk/types";
import { _CloudWatchLoggingOptionUpdate } from "./_CloudWatchLoggingOptionUpdate";

export const _CloudWatchLoggingOptionUpdates: _List_ = {
  type: "list",
  member: {
    shape: _CloudWatchLoggingOptionUpdate
  }
};
