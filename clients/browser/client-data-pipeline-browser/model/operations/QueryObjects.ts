import { QueryObjectsInput } from "../shapes/QueryObjectsInput";
import { QueryObjectsOutput } from "../shapes/QueryObjectsOutput";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
