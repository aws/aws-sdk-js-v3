import { UntagUserInput } from "./UntagUserInput";
import { UntagUserOutput } from "./UntagUserOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
