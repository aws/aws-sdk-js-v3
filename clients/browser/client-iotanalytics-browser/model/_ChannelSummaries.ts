import { List as _List_ } from "@aws-sdk/types";
import { _ChannelSummary } from "./_ChannelSummary";

export const _ChannelSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ChannelSummary
  }
};
