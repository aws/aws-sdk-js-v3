import { ListPackagingGroupsInput } from "../shapes/ListPackagingGroupsInput";
import { ListPackagingGroupsOutput } from "../shapes/ListPackagingGroupsOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPackagingGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPackagingGroups",
  http: {
    method: "GET",
    requestUri: "/packaging_groups"
  },
  input: {
    shape: ListPackagingGroupsInput
  },
  output: {
    shape: ListPackagingGroupsOutput
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
