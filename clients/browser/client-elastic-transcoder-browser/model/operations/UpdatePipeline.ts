import { UpdatePipelineInput } from "../shapes/UpdatePipelineInput";
import { UpdatePipelineOutput } from "../shapes/UpdatePipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePipeline",
  http: {
    method: "PUT",
    requestUri: "/2012-09-25/pipelines/{Id}"
  },
  input: {
    shape: UpdatePipelineInput
  },
  output: {
    shape: UpdatePipelineOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: IncompatibleVersionException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
