import { ListThingsInThingGroupInput } from "./ListThingsInThingGroupInput";
import { ListThingsInThingGroupOutput } from "./ListThingsInThingGroupOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
