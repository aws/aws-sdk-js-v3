import { CreateServiceLinkedRoleInput } from "../shapes/CreateServiceLinkedRoleInput";
import { CreateServiceLinkedRoleOutput } from "../shapes/CreateServiceLinkedRoleOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
