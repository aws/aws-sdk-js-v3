import { ListThingGroupsInput } from "../shapes/ListThingGroupsInput";
import { ListThingGroupsOutput } from "../shapes/ListThingGroupsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListThingGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThingGroups",
  http: {
    method: "GET",
    requestUri: "/thing-groups"
  },
  input: {
    shape: ListThingGroupsInput
  },
  output: {
    shape: ListThingGroupsOutput
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
