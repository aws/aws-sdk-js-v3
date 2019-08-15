import { AddUserToGroupInput } from "../shapes/AddUserToGroupInput";
import { AddUserToGroupOutput } from "../shapes/AddUserToGroupOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddUserToGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddUserToGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddUserToGroupInput
  },
  output: {
    shape: AddUserToGroupOutput
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
