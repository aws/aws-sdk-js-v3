import { CreatePipelineInput } from "../shapes/CreatePipelineInput";
import { CreatePipelineOutput } from "../shapes/CreatePipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
