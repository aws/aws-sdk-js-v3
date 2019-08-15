import { CreateGroupInput } from "../shapes/CreateGroupInput";
import { CreateGroupOutput } from "../shapes/CreateGroupOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
