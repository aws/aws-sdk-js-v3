import { List as _List_ } from "@aws-sdk/types";
import { _AggregatedSourceStatus } from "./_AggregatedSourceStatus";

export const _AggregatedSourceStatusList: _List_ = {
  type: "list",
  member: {
    shape: _AggregatedSourceStatus
  }
};
