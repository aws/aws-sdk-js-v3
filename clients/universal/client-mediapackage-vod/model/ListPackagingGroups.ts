import { ListPackagingGroupsInput } from "./ListPackagingGroupsInput";
import { ListPackagingGroupsOutput } from "./ListPackagingGroupsOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
