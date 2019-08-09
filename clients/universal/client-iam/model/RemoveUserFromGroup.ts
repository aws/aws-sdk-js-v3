import { RemoveUserFromGroupInput } from "./RemoveUserFromGroupInput";
import { RemoveUserFromGroupOutput } from "./RemoveUserFromGroupOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveUserFromGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveUserFromGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveUserFromGroupInput
  },
  output: {
    shape: RemoveUserFromGroupOutput
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
