import { UpdateThingGroupsForThingInput } from "./UpdateThingGroupsForThingInput";
import { UpdateThingGroupsForThingOutput } from "./UpdateThingGroupsForThingOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateThingGroupsForThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateThingGroupsForThing",
  http: {
    method: "PUT",
    requestUri: "/thing-groups/updateThingGroupsForThing"
  },
  input: {
    shape: UpdateThingGroupsForThingInput
  },
  output: {
    shape: UpdateThingGroupsForThingOutput
  },
  errors: [
    {
      shape: InvalidRequestException
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
