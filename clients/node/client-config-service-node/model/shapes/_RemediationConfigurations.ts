import { List as _List_ } from "@aws-sdk/types";
import { _RemediationConfiguration } from "./_RemediationConfiguration";

export const _RemediationConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _RemediationConfiguration
  }
};
