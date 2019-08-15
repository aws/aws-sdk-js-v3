import { DescribeAppsInput } from "../shapes/DescribeAppsInput";
import { DescribeAppsOutput } from "../shapes/DescribeAppsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeApps: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeApps",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAppsInput
  },
  output: {
    shape: DescribeAppsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
