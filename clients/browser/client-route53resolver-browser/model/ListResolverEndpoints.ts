import { ListResolverEndpointsInput } from "./ListResolverEndpointsInput";
import { ListResolverEndpointsOutput } from "./ListResolverEndpointsOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListResolverEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResolverEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResolverEndpointsInput
  },
  output: {
    shape: ListResolverEndpointsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: ThrottlingException
    }
  ]
};
