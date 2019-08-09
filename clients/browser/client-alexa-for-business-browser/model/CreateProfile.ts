import { CreateProfileInput } from "./CreateProfileInput";
import { CreateProfileOutput } from "./CreateProfileOutput";
import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
