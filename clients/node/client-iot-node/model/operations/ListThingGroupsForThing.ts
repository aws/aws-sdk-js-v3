import { ListThingGroupsForThingInput } from "../shapes/ListThingGroupsForThingInput";
import { ListThingGroupsForThingOutput } from "../shapes/ListThingGroupsForThingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListThingGroupsForThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThingGroupsForThing",
  http: {
    method: "GET",
    requestUri: "/things/{thingName}/thing-groups"
  },
  input: {
    shape: ListThingGroupsForThingInput
  },
  output: {
    shape: ListThingGroupsForThingOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
