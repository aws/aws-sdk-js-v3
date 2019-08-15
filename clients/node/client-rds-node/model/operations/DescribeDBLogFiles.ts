import { DescribeDBLogFilesInput } from "../shapes/DescribeDBLogFilesInput";
import { DescribeDBLogFilesOutput } from "../shapes/DescribeDBLogFilesOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
