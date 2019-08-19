import { RemoveAttributesInput } from "../shapes/RemoveAttributesInput";
import { RemoveAttributesOutput } from "../shapes/RemoveAttributesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveAttributes",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/attributes/{attribute-type}"
  },
  input: {
    shape: RemoveAttributesInput
  },
  output: {
    shape: RemoveAttributesOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
