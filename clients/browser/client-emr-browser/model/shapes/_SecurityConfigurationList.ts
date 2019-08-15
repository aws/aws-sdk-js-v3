import { List as _List_ } from "@aws-sdk/types";
import { _SecurityConfigurationSummary } from "./_SecurityConfigurationSummary";

export const _SecurityConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _SecurityConfigurationSummary
  }
};
