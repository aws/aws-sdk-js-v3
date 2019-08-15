import { UntagRoleInput } from "../shapes/UntagRoleInput";
import { UntagRoleOutput } from "../shapes/UntagRoleOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
