import { DescribeWorkspacesInput } from "../shapes/DescribeWorkspacesInput";
import { DescribeWorkspacesOutput } from "../shapes/DescribeWorkspacesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeWorkspaces: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkspaces",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkspacesInput
  },
  output: {
    shape: DescribeWorkspacesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
