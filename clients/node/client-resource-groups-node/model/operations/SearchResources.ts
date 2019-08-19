import { SearchResourcesInput } from "../shapes/SearchResourcesInput";
import { SearchResourcesOutput } from "../shapes/SearchResourcesOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchResources",
  http: {
    method: "POST",
    requestUri: "/resources/search"
  },
  input: {
    shape: SearchResourcesInput
  },
  output: {
    shape: SearchResourcesOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
