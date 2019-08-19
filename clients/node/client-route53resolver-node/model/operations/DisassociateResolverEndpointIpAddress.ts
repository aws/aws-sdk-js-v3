import { DisassociateResolverEndpointIpAddressInput } from "../shapes/DisassociateResolverEndpointIpAddressInput";
import { DisassociateResolverEndpointIpAddressOutput } from "../shapes/DisassociateResolverEndpointIpAddressOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateResolverEndpointIpAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateResolverEndpointIpAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateResolverEndpointIpAddressInput
  },
  output: {
    shape: DisassociateResolverEndpointIpAddressOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceExistsException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
