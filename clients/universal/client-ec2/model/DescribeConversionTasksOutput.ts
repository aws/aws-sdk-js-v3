import { _DescribeConversionTaskList } from "./_DescribeConversionTaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConversionTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConversionTasks: {
      shape: _DescribeConversionTaskList,
      locationName: "conversionTasks"
    }
  }
};
