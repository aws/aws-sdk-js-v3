import { CreateDynamicThingGroupInput } from "../shapes/CreateDynamicThingGroupInput";
import { CreateDynamicThingGroupOutput } from "../shapes/CreateDynamicThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidQueryException } from "../shapes/InvalidQueryException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
