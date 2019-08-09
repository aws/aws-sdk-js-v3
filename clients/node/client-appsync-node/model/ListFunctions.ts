import { ListFunctionsInput } from "./ListFunctionsInput";
import { ListFunctionsOutput } from "./ListFunctionsOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
