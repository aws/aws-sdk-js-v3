import { CreatePackagingGroupInput } from "../shapes/CreatePackagingGroupInput";
import { CreatePackagingGroupOutput } from "../shapes/CreatePackagingGroupOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePackagingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePackagingGroup",
  http: {
    method: "POST",
    requestUri: "/packaging_groups"
  },
  input: {
    shape: CreatePackagingGroupInput
  },
  output: {
    shape: CreatePackagingGroupOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
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
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
