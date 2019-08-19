import { DescribeEntityRecognizerInput } from "../shapes/DescribeEntityRecognizerInput";
import { DescribeEntityRecognizerOutput } from "../shapes/DescribeEntityRecognizerOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEntityRecognizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEntityRecognizer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEntityRecognizerInput
  },
  output: {
    shape: DescribeEntityRecognizerOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
