import { ListJobsByStatusInput } from "./ListJobsByStatusInput";
import { ListJobsByStatusOutput } from "./ListJobsByStatusOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListJobsByStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobsByStatus",
  http: {
    method: "GET",
    requestUri: "/2012-09-25/jobsByStatus/{Status}"
  },
  input: {
    shape: ListJobsByStatusInput
  },
  output: {
    shape: ListJobsByStatusOutput
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
