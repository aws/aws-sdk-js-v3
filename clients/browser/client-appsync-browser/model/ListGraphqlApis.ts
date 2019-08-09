import { ListGraphqlApisInput } from "./ListGraphqlApisInput";
import { ListGraphqlApisOutput } from "./ListGraphqlApisOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
