import { UpdateAccessKeyInput } from "./UpdateAccessKeyInput";
import { UpdateAccessKeyOutput } from "./UpdateAccessKeyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAccessKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAccessKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAccessKeyInput
  },
  output: {
    shape: UpdateAccessKeyOutput
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
