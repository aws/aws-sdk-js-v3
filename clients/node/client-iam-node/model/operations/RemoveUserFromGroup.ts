import { RemoveUserFromGroupInput } from "../shapes/RemoveUserFromGroupInput";
import { RemoveUserFromGroupOutput } from "../shapes/RemoveUserFromGroupOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
