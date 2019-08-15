import { DescribeServerInput } from "../shapes/DescribeServerInput";
import { DescribeServerOutput } from "../shapes/DescribeServerOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServerInput
  },
  output: {
    shape: DescribeServerOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
