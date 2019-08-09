import { UpdateEndpointGroupInput } from "./UpdateEndpointGroupInput";
import { UpdateEndpointGroupOutput } from "./UpdateEndpointGroupOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { EndpointGroupNotFoundException } from "./EndpointGroupNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
