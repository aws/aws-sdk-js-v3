import { List as _List_ } from "@aws-sdk/types";
import { _RegexPatternSetUpdate } from "./_RegexPatternSetUpdate";

export const _RegexPatternSetUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _RegexPatternSetUpdate
  }
};
