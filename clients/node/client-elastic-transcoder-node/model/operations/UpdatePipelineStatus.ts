import { UpdatePipelineStatusInput } from "../shapes/UpdatePipelineStatusInput";
import { UpdatePipelineStatusOutput } from "../shapes/UpdatePipelineStatusOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
