import { RemoveTagsFromStreamInput } from "../shapes/RemoveTagsFromStreamInput";
import { RemoveTagsFromStreamOutput } from "../shapes/RemoveTagsFromStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTagsFromStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTagsFromStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveTagsFromStreamInput
  },
  output: {
    shape: RemoveTagsFromStreamOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
