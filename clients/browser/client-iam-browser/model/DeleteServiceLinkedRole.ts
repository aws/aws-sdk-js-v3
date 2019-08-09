import { DeleteServiceLinkedRoleInput } from "./DeleteServiceLinkedRoleInput";
import { DeleteServiceLinkedRoleOutput } from "./DeleteServiceLinkedRoleOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
