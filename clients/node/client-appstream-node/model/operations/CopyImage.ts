import { CopyImageInput } from "../shapes/CopyImageInput";
import { CopyImageOutput } from "../shapes/CopyImageOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceNotAvailableException } from "../shapes/ResourceNotAvailableException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { IncompatibleImageException } from "../shapes/IncompatibleImageException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CopyImage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyImage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyImageInput
  },
  output: {
    shape: CopyImageOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceNotAvailableException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: IncompatibleImageException
    }
  ]
};
