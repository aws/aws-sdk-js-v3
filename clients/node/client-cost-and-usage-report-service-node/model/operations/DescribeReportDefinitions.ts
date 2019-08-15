import { DescribeReportDefinitionsInput } from "../shapes/DescribeReportDefinitionsInput";
import { DescribeReportDefinitionsOutput } from "../shapes/DescribeReportDefinitionsOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
