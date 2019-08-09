import { AssociateResolverEndpointIpAddressInput } from "./AssociateResolverEndpointIpAddressInput";
import { AssociateResolverEndpointIpAddressOutput } from "./AssociateResolverEndpointIpAddressOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateResolverEndpointIpAddress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateResolverEndpointIpAddress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateResolverEndpointIpAddressInput
  },
  output: {
    shape: AssociateResolverEndpointIpAddressOutput
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
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    }
  ]
};
