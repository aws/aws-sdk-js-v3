import { List as _List_ } from "@aws-sdk/types";
import { _MetricDefinition } from "./_MetricDefinition";

export const _MetricDefinitionList: _List_ = {
  type: "list",
  member: {
    shape: _MetricDefinition
  }
};
