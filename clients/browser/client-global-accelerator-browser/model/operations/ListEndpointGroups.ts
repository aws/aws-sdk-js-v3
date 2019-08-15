import { ListEndpointGroupsInput } from "../shapes/ListEndpointGroupsInput";
import { ListEndpointGroupsOutput } from "../shapes/ListEndpointGroupsOutput";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
