import { CreateDynamicThingGroupInput } from "./CreateDynamicThingGroupInput";
import { CreateDynamicThingGroupOutput } from "./CreateDynamicThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidQueryException } from "./InvalidQueryException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDynamicThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDynamicThingGroup",
  http: {
    method: "POST",
    requestUri: "/dynamic-thing-groups/{thingGroupName}"
  },
  input: {
    shape: CreateDynamicThingGroupInput
  },
  output: {
    shape: CreateDynamicThingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidQueryException
    },
    {
      shape: LimitExceededException
    }
  ]
};
