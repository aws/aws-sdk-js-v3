import { UntagRoleInput } from "./UntagRoleInput";
import { UntagRoleOutput } from "./UntagRoleOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UntagRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagRoleInput
  },
  output: {
    shape: UntagRoleOutput
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
