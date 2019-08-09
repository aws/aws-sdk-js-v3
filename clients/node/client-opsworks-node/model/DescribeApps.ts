import { DescribeAppsInput } from "./DescribeAppsInput";
import { DescribeAppsOutput } from "./DescribeAppsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
