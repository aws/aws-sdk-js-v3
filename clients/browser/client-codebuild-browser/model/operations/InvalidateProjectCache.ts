import { InvalidateProjectCacheInput } from "../shapes/InvalidateProjectCacheInput";
import { InvalidateProjectCacheOutput } from "../shapes/InvalidateProjectCacheOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InvalidateProjectCache: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InvalidateProjectCache",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: InvalidateProjectCacheInput
  },
  output: {
    shape: InvalidateProjectCacheOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
