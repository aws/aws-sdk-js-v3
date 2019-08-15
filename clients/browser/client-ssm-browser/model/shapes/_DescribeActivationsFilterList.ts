import { List as _List_ } from "@aws-sdk/types";
import { _DescribeActivationsFilter } from "./_DescribeActivationsFilter";

export const _DescribeActivationsFilterList: _List_ = {
  type: "list",
  member: {
    shape: _DescribeActivationsFilter
  }
};
