import { List as _List_ } from "@aws-sdk/types";
import { _DescribeFleetError } from "./_DescribeFleetError";

export const _DescribeFleetsErrorSet: _List_ = {
  type: "list",
  member: {
    shape: _DescribeFleetError,
    locationName: "item"
  }
};
