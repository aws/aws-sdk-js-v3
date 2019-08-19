import { List as _List_ } from "@aws-sdk/types";
import { _ContentModerationDetection } from "./_ContentModerationDetection";

export const _ContentModerationDetections: _List_ = {
  type: "list",
  member: {
    shape: _ContentModerationDetection
  }
};
