import { CreatePipelineInput } from "./CreatePipelineInput";
import { CreatePipelineOutput } from "./CreatePipelineOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreatePipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePipeline",
  http: {
    method: "POST",
    requestUri: "/2012-09-25/pipelines"
  },
  input: {
    shape: CreatePipelineInput
  },
  output: {
    shape: CreatePipelineOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceException
    }
  ]
};
