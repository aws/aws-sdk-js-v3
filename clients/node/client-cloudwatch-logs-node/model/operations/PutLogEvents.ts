import { PutLogEventsInput } from "../shapes/PutLogEventsInput";
import { PutLogEventsOutput } from "../shapes/PutLogEventsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidSequenceTokenException } from "../shapes/InvalidSequenceTokenException";
import { DataAlreadyAcceptedException } from "../shapes/DataAlreadyAcceptedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnrecognizedClientException } from "../shapes/UnrecognizedClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutLogEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLogEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutLogEventsInput
  },
  output: {
    shape: PutLogEventsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidSequenceTokenException
    },
    {
      shape: DataAlreadyAcceptedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnrecognizedClientException
    }
  ]
};
