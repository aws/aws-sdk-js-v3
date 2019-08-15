import { List as _List_ } from "@aws-sdk/types";
import { _ModerationLabel } from "./_ModerationLabel";

export const _ModerationLabels: _List_ = {
  type: "list",
  member: {
    shape: _ModerationLabel
  }
};
