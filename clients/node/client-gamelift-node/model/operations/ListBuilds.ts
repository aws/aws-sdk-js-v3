import { ListBuildsInput } from "../shapes/ListBuildsInput";
import { ListBuildsOutput } from "../shapes/ListBuildsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBuilds: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBuilds",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListBuildsInput
  },
  output: {
    shape: ListBuildsOutput
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
