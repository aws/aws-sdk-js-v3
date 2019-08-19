import { CreateEndpointGroupInput } from "../shapes/CreateEndpointGroupInput";
import { CreateEndpointGroupOutput } from "../shapes/CreateEndpointGroupOutput";
import { AcceleratorNotFoundException } from "../shapes/AcceleratorNotFoundException";
import { EndpointGroupAlreadyExistsException } from "../shapes/EndpointGroupAlreadyExistsException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
