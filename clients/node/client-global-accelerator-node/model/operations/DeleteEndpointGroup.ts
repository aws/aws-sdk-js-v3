import { DeleteEndpointGroupInput } from "../shapes/DeleteEndpointGroupInput";
import { DeleteEndpointGroupOutput } from "../shapes/DeleteEndpointGroupOutput";
import { EndpointGroupNotFoundException } from "../shapes/EndpointGroupNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEndpointGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEndpointGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEndpointGroupInput
  },
  output: {
    shape: DeleteEndpointGroupOutput
  },
  errors: [
    {
      shape: EndpointGroupNotFoundException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
