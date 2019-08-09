import { ReadJobInput } from "./ReadJobInput";
import { ReadJobOutput } from "./ReadJobOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
