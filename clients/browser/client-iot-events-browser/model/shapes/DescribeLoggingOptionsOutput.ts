import { _LoggingOptions } from "./_LoggingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoggingOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    loggingOptions: {
      shape: _LoggingOptions
    }
  }
};
