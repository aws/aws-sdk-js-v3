import { ListResolverEndpointsInput } from "../shapes/ListResolverEndpointsInput";
import { ListResolverEndpointsOutput } from "../shapes/ListResolverEndpointsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
