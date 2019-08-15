import { DeleteGroupInput } from "../shapes/DeleteGroupInput";
import { DeleteGroupOutput } from "../shapes/DeleteGroupOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGroupInput
  },
  output: {
    shape: DeleteGroupOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: DeleteConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
