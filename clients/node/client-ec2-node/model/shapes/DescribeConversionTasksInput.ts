import { _ConversionIdStringList } from "./_ConversionIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConversionTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConversionTaskIds: {
      shape: _ConversionIdStringList,
      locationName: "conversionTaskId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
