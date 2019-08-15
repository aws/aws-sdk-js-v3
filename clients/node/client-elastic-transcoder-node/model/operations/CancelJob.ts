import { CancelJobInput } from "../shapes/CancelJobInput";
import { CancelJobOutput } from "../shapes/CancelJobOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelJob",
  http: {
    method: "DELETE",
    requestUri: "/2012-09-25/jobs/{Id}"
  },
  input: {
    shape: CancelJobInput
  },
  output: {
    shape: CancelJobOutput
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
      shape: ResourceInUseException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServiceException
    }
  ]
};
