import { DescribeReportDefinitionsInput } from "./DescribeReportDefinitionsInput";
import { DescribeReportDefinitionsOutput } from "./DescribeReportDefinitionsOutput";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReportDefinitions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReportDefinitions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReportDefinitionsInput
  },
  output: {
    shape: DescribeReportDefinitionsOutput
  },
  errors: [
    {
      shape: InternalErrorException
    }
  ]
};
