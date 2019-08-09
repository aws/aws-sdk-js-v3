import { SearchResourcesInput } from "./SearchResourcesInput";
import { SearchResourcesOutput } from "./SearchResourcesOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
