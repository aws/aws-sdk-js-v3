import { CreateGroupInput } from "./CreateGroupInput";
import { CreateGroupOutput } from "./CreateGroupOutput";
import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGroupInput
  },
  output: {
    shape: CreateGroupOutput,
    resultWrapper: "CreateGroupResult"
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
