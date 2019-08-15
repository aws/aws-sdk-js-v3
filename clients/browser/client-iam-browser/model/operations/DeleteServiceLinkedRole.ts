import { DeleteServiceLinkedRoleInput } from "../shapes/DeleteServiceLinkedRoleInput";
import { DeleteServiceLinkedRoleOutput } from "../shapes/DeleteServiceLinkedRoleOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteServiceLinkedRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteServiceLinkedRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServiceLinkedRoleInput
  },
  output: {
    shape: DeleteServiceLinkedRoleOutput,
    resultWrapper: "DeleteServiceLinkedRoleResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
