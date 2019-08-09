import { GetGraphqlApiInput } from "./GetGraphqlApiInput";
import { GetGraphqlApiOutput } from "./GetGraphqlApiOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGraphqlApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGraphqlApi",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}"
  },
  input: {
    shape: GetGraphqlApiInput
  },
  output: {
    shape: GetGraphqlApiOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
