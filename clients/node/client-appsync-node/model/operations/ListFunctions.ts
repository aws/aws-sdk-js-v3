import { ListFunctionsInput } from "../shapes/ListFunctionsInput";
import { ListFunctionsOutput } from "../shapes/ListFunctionsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFunctions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFunctions",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/functions"
  },
  input: {
    shape: ListFunctionsInput
  },
  output: {
    shape: ListFunctionsOutput
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
    }
  ]
};
