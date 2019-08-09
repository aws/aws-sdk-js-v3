import { StartQueryInput } from "./StartQueryInput";
import { StartQueryOutput } from "./StartQueryOutput";
import { MalformedQueryException } from "./MalformedQueryException";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
