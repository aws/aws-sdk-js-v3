import { List as _List_ } from "@aws-sdk/types";
import { _ConversionTask } from "./_ConversionTask";

export const _DescribeConversionTaskList: _List_ = {
  type: "list",
  member: {
    shape: _ConversionTask,
    locationName: "item"
  }
};
