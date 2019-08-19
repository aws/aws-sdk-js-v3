import { DeleteResolverEndpointInput } from "../shapes/DeleteResolverEndpointInput";
import { DeleteResolverEndpointOutput } from "../shapes/DeleteResolverEndpointOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteResolverEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteResolverEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteResolverEndpointInput
  },
  output: {
    shape: DeleteResolverEndpointOutput
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
