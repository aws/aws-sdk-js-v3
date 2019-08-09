import { List as _List_ } from "@aws-sdk/types";
import { _MetricCollectionType } from "./_MetricCollectionType";

export const _MetricCollectionTypes: _List_ = {
  type: "list",
  member: {
    shape: _MetricCollectionType
  }
};
