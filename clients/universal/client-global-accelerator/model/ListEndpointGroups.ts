import { ListEndpointGroupsInput } from "./ListEndpointGroupsInput";
import { ListEndpointGroupsOutput } from "./ListEndpointGroupsOutput";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListEndpointGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEndpointGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEndpointGroupsInput
  },
  output: {
    shape: ListEndpointGroupsOutput
  },
  errors: [
    {
      shape: ListenerNotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
