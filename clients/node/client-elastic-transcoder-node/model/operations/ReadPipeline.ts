import { ReadPipelineInput } from "../shapes/ReadPipelineInput";
import { ReadPipelineOutput } from "../shapes/ReadPipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReadPipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReadPipeline",
  http: {
    method: "GET",
    requestUri: "/2012-09-25/pipelines/{Id}"
  },
  input: {
    shape: ReadPipelineInput
  },
  output: {
    shape: ReadPipelineOutput
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
