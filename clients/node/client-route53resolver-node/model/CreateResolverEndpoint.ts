import { CreateResolverEndpointInput } from "./CreateResolverEndpointInput";
import { CreateResolverEndpointOutput } from "./CreateResolverEndpointOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
