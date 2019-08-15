import { AssociateResolverEndpointIpAddressInput } from "../shapes/AssociateResolverEndpointIpAddressInput";
import { AssociateResolverEndpointIpAddressOutput } from "../shapes/AssociateResolverEndpointIpAddressOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
