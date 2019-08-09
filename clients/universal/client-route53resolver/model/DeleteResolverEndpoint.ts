import { DeleteResolverEndpointInput } from "./DeleteResolverEndpointInput";
import { DeleteResolverEndpointOutput } from "./DeleteResolverEndpointOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
