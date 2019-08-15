import { List as _List_ } from "@aws-sdk/types";
import { _ProvisionedProductPlanSummary } from "./_ProvisionedProductPlanSummary";

export const _ProvisionedProductPlans: _List_ = {
  type: "list",
  member: {
    shape: _ProvisionedProductPlanSummary
  }
};
