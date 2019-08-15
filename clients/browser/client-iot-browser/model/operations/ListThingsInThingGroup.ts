import { ListThingsInThingGroupInput } from "../shapes/ListThingsInThingGroupInput";
import { ListThingsInThingGroupOutput } from "../shapes/ListThingsInThingGroupOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListThingsInThingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThingsInThingGroup",
  http: {
    method: "GET",
    requestUri: "/thing-groups/{thingGroupName}/things"
  },
  input: {
    shape: ListThingsInThingGroupInput
  },
  output: {
    shape: ListThingsInThingGroupOutput
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
