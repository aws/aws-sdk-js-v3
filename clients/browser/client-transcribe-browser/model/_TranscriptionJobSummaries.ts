import { List as _List_ } from "@aws-sdk/types";
import { _TranscriptionJobSummary } from "./_TranscriptionJobSummary";

export const _TranscriptionJobSummaries: _List_ = {
  type: "list",
  member: {
    shape: _TranscriptionJobSummary
  }
};
