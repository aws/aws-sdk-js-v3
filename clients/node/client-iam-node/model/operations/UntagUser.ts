import { UntagUserInput } from "../shapes/UntagUserInput";
import { UntagUserOutput } from "../shapes/UntagUserOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagUserInput
  },
  output: {
    shape: UntagUserOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
