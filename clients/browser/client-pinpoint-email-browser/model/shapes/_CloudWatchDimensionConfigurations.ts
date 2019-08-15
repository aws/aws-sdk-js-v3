import { List as _List_ } from "@aws-sdk/types";
import { _CloudWatchDimensionConfiguration } from "./_CloudWatchDimensionConfiguration";

export const _CloudWatchDimensionConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _CloudWatchDimensionConfiguration
  }
};
