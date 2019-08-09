import { CreateServiceLinkedRoleInput } from "./CreateServiceLinkedRoleInput";
import { CreateServiceLinkedRoleOutput } from "./CreateServiceLinkedRoleOutput";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateServiceLinkedRole: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateServiceLinkedRole",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateServiceLinkedRoleInput
  },
  output: {
    shape: CreateServiceLinkedRoleOutput,
    resultWrapper: "CreateServiceLinkedRoleResult"
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
