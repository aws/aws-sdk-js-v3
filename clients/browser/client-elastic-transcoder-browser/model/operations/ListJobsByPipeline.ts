import { ListJobsByPipelineInput } from "../shapes/ListJobsByPipelineInput";
import { ListJobsByPipelineOutput } from "../shapes/ListJobsByPipelineOutput";
import { ValidationException } from "../shapes/ValidationException";
import { IncompatibleVersionException } from "../shapes/IncompatibleVersionException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListJobsByPipeline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListJobsByPipeline",
  http: {
    method: "GET",
    requestUri: "/2012-09-25/jobsByPipeline/{PipelineId}"
  },
  input: {
    shape: ListJobsByPipelineInput
  },
  output: {
    shape: ListJobsByPipelineOutput
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
