import { UpdateResolverEndpointInput } from "./UpdateResolverEndpointInput";
import { UpdateResolverEndpointOutput } from "./UpdateResolverEndpointOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateResolverEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateResolverEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateResolverEndpointInput
  },
  output: {
    shape: UpdateResolverEndpointOutput
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
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
