import { DeleteAccessKeyInput } from "./DeleteAccessKeyInput";
import { DeleteAccessKeyOutput } from "./DeleteAccessKeyOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
