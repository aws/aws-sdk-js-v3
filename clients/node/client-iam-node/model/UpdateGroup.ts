import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateGroupOutput } from "./UpdateGroupOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
