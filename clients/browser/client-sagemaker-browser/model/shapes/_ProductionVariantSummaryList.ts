import { List as _List_ } from "@aws-sdk/types";
import { _ProductionVariantSummary } from "./_ProductionVariantSummary";

export const _ProductionVariantSummaryList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ProductionVariantSummary
  }
};
