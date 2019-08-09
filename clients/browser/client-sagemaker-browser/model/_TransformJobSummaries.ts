import { List as _List_ } from "@aws-sdk/types";
import { _TransformJobSummary } from "./_TransformJobSummary";

export const _TransformJobSummaries: _List_ = {
  type: "list",
  member: {
    shape: _TransformJobSummary
  }
};
