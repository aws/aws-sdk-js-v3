import { List as _List_ } from "@aws-sdk/types";
import { _EventDetailsErrorItem } from "./_EventDetailsErrorItem";

export const _DescribeEventDetailsFailedSet: _List_ = {
  type: "list",
  member: {
    shape: _EventDetailsErrorItem
  }
};
