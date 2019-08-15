import { DeleteAccessKeyInput } from "../shapes/DeleteAccessKeyInput";
import { DeleteAccessKeyOutput } from "../shapes/DeleteAccessKeyOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAccessKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAccessKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAccessKeyInput
  },
  output: {
    shape: DeleteAccessKeyOutput
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
