import { _DescribeDBLogFilesList } from "./_DescribeDBLogFilesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBLogFilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DescribeDBLogFiles: {
      shape: _DescribeDBLogFilesList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
