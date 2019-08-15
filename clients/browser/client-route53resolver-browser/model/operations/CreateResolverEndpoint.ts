import { CreateResolverEndpointInput } from "../shapes/CreateResolverEndpointInput";
import { CreateResolverEndpointOutput } from "../shapes/CreateResolverEndpointOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateResolverEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateResolverEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateResolverEndpointInput
  },
  output: {
    shape: CreateResolverEndpointOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
