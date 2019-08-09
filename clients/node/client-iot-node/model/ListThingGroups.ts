import { ListThingGroupsInput } from "./ListThingGroupsInput";
import { ListThingGroupsOutput } from "./ListThingGroupsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
