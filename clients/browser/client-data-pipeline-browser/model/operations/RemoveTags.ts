import { RemoveTagsInput } from "../shapes/RemoveTagsInput";
import { RemoveTagsOutput } from "../shapes/RemoveTagsOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTags",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsInput
  },
  output: {
    shape: RemoveTagsOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    }
  ]
};
