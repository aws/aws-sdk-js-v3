import { DescribeProtectedResourceInput } from "../shapes/DescribeProtectedResourceInput";
import { DescribeProtectedResourceOutput } from "../shapes/DescribeProtectedResourceOutput";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProtectedResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProtectedResource",
  http: {
    method: "GET",
    requestUri: "/resources/{resourceArn}"
  },
  input: {
    shape: DescribeProtectedResourceInput
  },
  output: {
    shape: DescribeProtectedResourceOutput
  },
  errors: [
    {
      shape: MissingParameterValueException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
