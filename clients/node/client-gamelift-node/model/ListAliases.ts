import { ListAliasesInput } from "./ListAliasesInput";
import { ListAliasesOutput } from "./ListAliasesOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAliases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAliases",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAliasesInput
  },
  output: {
    shape: ListAliasesOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    }
  ]
};
