import { DescribeAnalysisSchemesInput } from "./DescribeAnalysisSchemesInput";
import { DescribeAnalysisSchemesOutput } from "./DescribeAnalysisSchemesOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAnalysisSchemes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAnalysisSchemes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAnalysisSchemesInput
  },
  output: {
    shape: DescribeAnalysisSchemesOutput,
    resultWrapper: "DescribeAnalysisSchemesResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
