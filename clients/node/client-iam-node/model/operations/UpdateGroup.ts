import { UpdateGroupInput } from "../shapes/UpdateGroupInput";
import { UpdateGroupOutput } from "../shapes/UpdateGroupOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGroupInput
  },
  output: {
    shape: UpdateGroupOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
