import { List as _List_ } from "@aws-sdk/types";
import { _DescribeDBLogFilesDetails } from "./_DescribeDBLogFilesDetails";

export const _DescribeDBLogFilesList: _List_ = {
  type: "list",
  member: {
    shape: _DescribeDBLogFilesDetails,
    locationName: "DescribeDBLogFilesDetails"
  }
};
