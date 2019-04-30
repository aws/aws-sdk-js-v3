import { List as _List_ } from "@aws-sdk/types";
import { _AnalyticsConfiguration } from "./_AnalyticsConfiguration";

export const _AnalyticsConfigurationList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _AnalyticsConfiguration
  }
};
