import { CreatePackagingGroupInput } from "./CreatePackagingGroupInput";
import { CreatePackagingGroupOutput } from "./CreatePackagingGroupOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
