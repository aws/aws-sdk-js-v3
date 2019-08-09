import { ReadPipelineInput } from "./ReadPipelineInput";
import { ReadPipelineOutput } from "./ReadPipelineOutput";
import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
