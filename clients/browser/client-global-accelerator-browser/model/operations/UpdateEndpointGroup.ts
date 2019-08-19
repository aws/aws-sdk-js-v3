import { UpdateEndpointGroupInput } from "../shapes/UpdateEndpointGroupInput";
import { UpdateEndpointGroupOutput } from "../shapes/UpdateEndpointGroupOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { EndpointGroupNotFoundException } from "../shapes/EndpointGroupNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateEndpointGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEndpointGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEndpointGroupInput
  },
  output: {
    shape: UpdateEndpointGroupOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: EndpointGroupNotFoundException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: LimitExceededException
    }
  ]
};
