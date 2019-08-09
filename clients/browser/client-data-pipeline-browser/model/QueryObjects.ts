import { QueryObjectsInput } from "./QueryObjectsInput";
import { QueryObjectsOutput } from "./QueryObjectsOutput";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const QueryObjects: _Operation_ = {
  metadata: ServiceMetadata,
  name: "QueryObjects",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: QueryObjectsInput
  },
  output: {
    shape: QueryObjectsOutput
  },
  errors: [
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
