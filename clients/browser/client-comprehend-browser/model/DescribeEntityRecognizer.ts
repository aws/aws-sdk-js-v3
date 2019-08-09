import { DescribeEntityRecognizerInput } from "./DescribeEntityRecognizerInput";
import { DescribeEntityRecognizerOutput } from "./DescribeEntityRecognizerOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
