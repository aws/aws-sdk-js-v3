import { CreateEndpointGroupInput } from "./CreateEndpointGroupInput";
import { CreateEndpointGroupOutput } from "./CreateEndpointGroupOutput";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { EndpointGroupAlreadyExistsException } from "./EndpointGroupAlreadyExistsException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateEndpointGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEndpointGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEndpointGroupInput
  },
  output: {
    shape: CreateEndpointGroupOutput
  },
  errors: [
    {
      shape: AcceleratorNotFoundException
    },
    {
      shape: EndpointGroupAlreadyExistsException
    },
    {
      shape: ListenerNotFoundException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: LimitExceededException
    }
  ]
};
