import { DescribeProtectedResourceInput } from "./DescribeProtectedResourceInput";
import { DescribeProtectedResourceOutput } from "./DescribeProtectedResourceOutput";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
