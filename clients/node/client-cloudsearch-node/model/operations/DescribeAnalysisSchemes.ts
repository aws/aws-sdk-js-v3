import { DescribeAnalysisSchemesInput } from "../shapes/DescribeAnalysisSchemesInput";
import { DescribeAnalysisSchemesOutput } from "../shapes/DescribeAnalysisSchemesOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
