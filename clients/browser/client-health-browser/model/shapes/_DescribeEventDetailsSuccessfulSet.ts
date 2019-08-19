import { List as _List_ } from "@aws-sdk/types";
import { _EventDetails } from "./_EventDetails";

export const _DescribeEventDetailsSuccessfulSet: _List_ = {
  type: "list",
  member: {
    shape: _EventDetails
  }
};
