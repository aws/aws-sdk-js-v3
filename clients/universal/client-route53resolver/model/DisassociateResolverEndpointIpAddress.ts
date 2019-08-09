import { DisassociateResolverEndpointIpAddressInput } from "./DisassociateResolverEndpointIpAddressInput";
import { DisassociateResolverEndpointIpAddressOutput } from "./DisassociateResolverEndpointIpAddressOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
