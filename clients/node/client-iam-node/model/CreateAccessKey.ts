import { CreateAccessKeyInput } from "./CreateAccessKeyInput";
import { CreateAccessKeyOutput } from "./CreateAccessKeyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAccessKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAccessKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAccessKeyInput
  },
  output: {
    shape: CreateAccessKeyOutput,
    resultWrapper: "CreateAccessKeyResult"
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
