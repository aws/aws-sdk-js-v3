import { DescribeConversionTasksInput } from "./DescribeConversionTasksInput";
import { DescribeConversionTasksOutput } from "./DescribeConversionTasksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeConversionTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConversionTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConversionTasksInput
  },
  output: {
    shape: DescribeConversionTasksOutput
  },
  errors: []
};
