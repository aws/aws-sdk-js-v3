import { UpdateThingGroupsForThingInput } from "../shapes/UpdateThingGroupsForThingInput";
import { UpdateThingGroupsForThingOutput } from "../shapes/UpdateThingGroupsForThingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
