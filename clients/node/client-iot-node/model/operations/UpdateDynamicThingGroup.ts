import { UpdateDynamicThingGroupInput } from "../shapes/UpdateDynamicThingGroupInput";
import { UpdateDynamicThingGroupOutput } from "../shapes/UpdateDynamicThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidQueryException } from "../shapes/InvalidQueryException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDynamicThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDynamicThingGroup",
  http: {
    method: "PATCH",
    requestUri: "/dynamic-thing-groups/{thingGroupName}"
  },
  input: {
    shape: UpdateDynamicThingGroupInput
  },
  output: {
    shape: UpdateDynamicThingGroupOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: VersionConflictException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidQueryException
    }
  ]
};
