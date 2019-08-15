import { DescribeWorkspacesConnectionStatusInput } from "../shapes/DescribeWorkspacesConnectionStatusInput";
import { DescribeWorkspacesConnectionStatusOutput } from "../shapes/DescribeWorkspacesConnectionStatusOutput";
import { InvalidParameterValuesException } from "../shapes/InvalidParameterValuesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeWorkspacesConnectionStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkspacesConnectionStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkspacesConnectionStatusInput
  },
  output: {
    shape: DescribeWorkspacesConnectionStatusOutput
  },
  errors: [
    {
      shape: InvalidParameterValuesException
    }
  ]
};
