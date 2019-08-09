import { UpdatePipelineStatusInput } from "./UpdatePipelineStatusInput";
import { UpdatePipelineStatusOutput } from "./UpdatePipelineStatusOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdatePipelineStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePipelineStatus",
  http: {
    method: "POST",
    requestUri: "/2012-09-25/pipelines/{Id}/status"
  },
  input: {
    shape: UpdatePipelineStatusInput
  },
  output: {
    shape: UpdatePipelineStatusOutput
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
