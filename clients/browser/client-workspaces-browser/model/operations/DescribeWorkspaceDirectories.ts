import { DescribeWorkspaceDirectoriesInput } from "../shapes/DescribeWorkspaceDirectoriesInput";
import { DescribeWorkspaceDirectoriesOutput } from "../shapes/DescribeWorkspaceDirectoriesOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeWorkspaceDirectories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkspaceDirectories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkspaceDirectoriesInput
  },
  output: {
    shape: DescribeWorkspaceDirectoriesOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    }
  ]
};
