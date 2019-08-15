import { UpdateThingGroupInput } from "../shapes/UpdateThingGroupInput";
import { UpdateThingGroupOutput } from "../shapes/UpdateThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateThingGroup",
  http: {
    method: "PATCH",
    requestUri: "/thing-groups/{thingGroupName}"
  },
  input: {
    shape: UpdateThingGroupInput
  },
  output: {
    shape: UpdateThingGroupOutput
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
    }
  ]
};
