import { List as _List_ } from "@aws-sdk/types";
import { _LabelDetection } from "./_LabelDetection";

export const _LabelDetections: _List_ = {
  type: "list",
  member: {
    shape: _LabelDetection
  }
};
