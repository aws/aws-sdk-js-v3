import { DescribeWorkspacesInput } from "./DescribeWorkspacesInput";
import { DescribeWorkspacesOutput } from "./DescribeWorkspacesOutput";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
