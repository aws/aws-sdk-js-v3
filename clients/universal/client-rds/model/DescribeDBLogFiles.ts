import { DescribeDBLogFilesInput } from "./DescribeDBLogFilesInput";
import { DescribeDBLogFilesOutput } from "./DescribeDBLogFilesOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDBLogFiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDBLogFiles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDBLogFilesInput
  },
  output: {
    shape: DescribeDBLogFilesOutput,
    resultWrapper: "DescribeDBLogFilesResult"
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    }
  ]
};
