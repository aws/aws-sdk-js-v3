import { UpdatePipelineInput } from "./UpdatePipelineInput";
import { UpdatePipelineOutput } from "./UpdatePipelineOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
