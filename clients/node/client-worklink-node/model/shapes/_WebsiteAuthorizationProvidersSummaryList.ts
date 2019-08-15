import { List as _List_ } from "@aws-sdk/types";
import { _WebsiteAuthorizationProviderSummary } from "./_WebsiteAuthorizationProviderSummary";

export const _WebsiteAuthorizationProvidersSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _WebsiteAuthorizationProviderSummary
  }
};
