import { StartQueryInput } from "../shapes/StartQueryInput";
import { StartQueryOutput } from "../shapes/StartQueryOutput";
import { MalformedQueryException } from "../shapes/MalformedQueryException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartQuery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartQuery",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartQueryInput
  },
  output: {
    shape: StartQueryOutput
  },
  errors: [
    {
      shape: MalformedQueryException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
