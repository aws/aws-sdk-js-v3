import { DescribeEnvironmentResourcesInput } from "../shapes/DescribeEnvironmentResourcesInput";
import { DescribeEnvironmentResourcesOutput } from "../shapes/DescribeEnvironmentResourcesOutput";
import { InsufficientPrivilegesException } from "../shapes/InsufficientPrivilegesException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEnvironmentResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEnvironmentResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEnvironmentResourcesInput
  },
  output: {
    shape: DescribeEnvironmentResourcesOutput,
    resultWrapper: "DescribeEnvironmentResourcesResult"
  },
  errors: [
    {
      shape: InsufficientPrivilegesException
    }
  ]
};
