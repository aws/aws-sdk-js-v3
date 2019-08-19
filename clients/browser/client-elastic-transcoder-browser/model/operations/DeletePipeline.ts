import { DeletePipelineInput } from "../shapes/DeletePipelineInput";
import { DeletePipelineOutput } from "../shapes/DeletePipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePipeline",
  http: {
    method: "DELETE",
    requestUri: "/2012-09-25/pipelines/{Id}"
  },
  input: {
    shape: DeletePipelineInput
  },
  output: {
    shape: DeletePipelineOutput
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
