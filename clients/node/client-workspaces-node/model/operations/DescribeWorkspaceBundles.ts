import { DescribeWorkspaceBundlesInput } from "../shapes/DescribeWorkspaceBundlesInput";
import { DescribeWorkspaceBundlesOutput } from "../shapes/DescribeWorkspaceBundlesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeWorkspaceBundles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkspaceBundles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkspaceBundlesInput
  },
  output: {
    shape: DescribeWorkspaceBundlesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    }
  ]
};
