import { PutLogEventsInput } from "./PutLogEventsInput";
import { PutLogEventsOutput } from "./PutLogEventsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidSequenceTokenException } from "./InvalidSequenceTokenException";
import { DataAlreadyAcceptedException } from "./DataAlreadyAcceptedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnrecognizedClientException } from "./UnrecognizedClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
