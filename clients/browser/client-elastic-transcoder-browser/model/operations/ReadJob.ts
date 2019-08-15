import { ReadJobInput } from "../shapes/ReadJobInput";
import { ReadJobOutput } from "../shapes/ReadJobOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReadJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReadJob",
  http: {
    method: "GET",
    requestUri: "/2012-09-25/jobs/{Id}"
  },
  input: {
    shape: ReadJobInput
  },
  output: {
    shape: ReadJobOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: IncompatibleVersionException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServiceException
    }
  ]
};
