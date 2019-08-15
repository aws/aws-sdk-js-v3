import { List as _List_ } from "@aws-sdk/types";
import { _CloudWatchLoggingOptionDescription } from "./_CloudWatchLoggingOptionDescription";

export const _CloudWatchLoggingOptionDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _CloudWatchLoggingOptionDescription
  }
};
