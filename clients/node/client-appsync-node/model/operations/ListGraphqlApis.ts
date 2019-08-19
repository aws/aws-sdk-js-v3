import { ListGraphqlApisInput } from "../shapes/ListGraphqlApisInput";
import { ListGraphqlApisOutput } from "../shapes/ListGraphqlApisOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGraphqlApis: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGraphqlApis",
  http: {
    method: "GET",
    requestUri: "/v1/apis"
  },
  input: {
    shape: ListGraphqlApisInput
  },
  output: {
    shape: ListGraphqlApisOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
