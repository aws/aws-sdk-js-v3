import { DescribeServerInput } from "./DescribeServerInput";
import { DescribeServerOutput } from "./DescribeServerOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
