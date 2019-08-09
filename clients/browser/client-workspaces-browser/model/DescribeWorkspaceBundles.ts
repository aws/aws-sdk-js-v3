import { DescribeWorkspaceBundlesInput } from "./DescribeWorkspaceBundlesInput";
import { DescribeWorkspaceBundlesOutput } from "./DescribeWorkspaceBundlesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
