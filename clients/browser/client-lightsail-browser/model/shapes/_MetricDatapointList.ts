import { List as _List_ } from "@aws-sdk/types";
import { _MetricDatapoint } from "./_MetricDatapoint";

export const _MetricDatapointList: _List_ = {
  type: "list",
  member: {
    shape: _MetricDatapoint
  }
};
