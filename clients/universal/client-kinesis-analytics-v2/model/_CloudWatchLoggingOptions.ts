import { List as _List_ } from "@aws-sdk/types";
import { _CloudWatchLoggingOption } from "./_CloudWatchLoggingOption";

export const _CloudWatchLoggingOptions: _List_ = {
  type: "list",
  member: {
    shape: _CloudWatchLoggingOption
  }
};
