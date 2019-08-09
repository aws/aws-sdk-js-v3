import { ListThingGroupsForThingInput } from "./ListThingGroupsForThingInput";
import { ListThingGroupsForThingOutput } from "./ListThingGroupsForThingOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
