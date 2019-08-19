import { UpdateResolverEndpointInput } from "../shapes/UpdateResolverEndpointInput";
import { UpdateResolverEndpointOutput } from "../shapes/UpdateResolverEndpointOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
