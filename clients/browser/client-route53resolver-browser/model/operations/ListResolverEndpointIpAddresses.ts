import { ListResolverEndpointIpAddressesInput } from "../shapes/ListResolverEndpointIpAddressesInput";
import { ListResolverEndpointIpAddressesOutput } from "../shapes/ListResolverEndpointIpAddressesOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
