import { UpdateThingGroupInput } from "./UpdateThingGroupInput";
import { UpdateThingGroupOutput } from "./UpdateThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { VersionConflictException } from "./VersionConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
