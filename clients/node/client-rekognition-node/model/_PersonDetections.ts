import { List as _List_ } from "@aws-sdk/types";
import { _PersonDetection } from "./_PersonDetection";

export const _PersonDetections: _List_ = {
  type: "list",
  member: {
    shape: _PersonDetection
  }
};
