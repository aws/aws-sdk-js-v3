import { UpdateDynamicThingGroupInput } from "./UpdateDynamicThingGroupInput";
import { UpdateDynamicThingGroupOutput } from "./UpdateDynamicThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidQueryException } from "./InvalidQueryException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
