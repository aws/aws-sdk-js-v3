import { UpdateAccessKeyInput } from "../shapes/UpdateAccessKeyInput";
import { UpdateAccessKeyOutput } from "../shapes/UpdateAccessKeyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
