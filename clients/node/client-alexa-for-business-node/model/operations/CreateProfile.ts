import { CreateProfileInput } from "../shapes/CreateProfileInput";
import { CreateProfileOutput } from "../shapes/CreateProfileOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateProfileInput
  },
  output: {
    shape: CreateProfileOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: AlreadyExistsException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
