import { CreateAccessKeyInput } from "../shapes/CreateAccessKeyInput";
import { CreateAccessKeyOutput } from "../shapes/CreateAccessKeyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
