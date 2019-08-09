import { List as _List_ } from "@aws-sdk/types";
import { _ImportTaskFilter } from "./_ImportTaskFilter";

export const _DescribeImportTasksFilterList: _List_ = {
  type: "list",
  member: {
    shape: _ImportTaskFilter
  }
};
