import { List as _List_ } from "@aws-sdk/types";
import { _OrganizationSummary } from "./_OrganizationSummary";

export const _OrganizationSummaries: _List_ = {
  type: "list",
  member: {
    shape: _OrganizationSummary
  }
};
