import { GetGraphqlApiInput } from "../shapes/GetGraphqlApiInput";
import { GetGraphqlApiOutput } from "../shapes/GetGraphqlApiOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
