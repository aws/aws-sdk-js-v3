import { List as _List_ } from "@aws-sdk/types";
import { _SystemTemplateSummary } from "./_SystemTemplateSummary";

export const _SystemTemplateSummaries: _List_ = {
  type: "list",
  member: {
    shape: _SystemTemplateSummary
  }
};
