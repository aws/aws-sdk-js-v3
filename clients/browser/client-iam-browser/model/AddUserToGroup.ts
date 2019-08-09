import { AddUserToGroupInput } from "./AddUserToGroupInput";
import { AddUserToGroupOutput } from "./AddUserToGroupOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
