import { ListResolverEndpointIpAddressesInput } from "./ListResolverEndpointIpAddressesInput";
import { ListResolverEndpointIpAddressesOutput } from "./ListResolverEndpointIpAddressesOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListResolverEndpointIpAddresses: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResolverEndpointIpAddresses",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResolverEndpointIpAddressesInput
  },
  output: {
    shape: ListResolverEndpointIpAddressesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ThrottlingException
    }
  ]
};
