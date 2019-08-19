import { DeletePackagingGroupInput } from "../shapes/DeletePackagingGroupInput";
import { DeletePackagingGroupOutput } from "../shapes/DeletePackagingGroupOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePackagingGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePackagingGroup",
  http: {
    method: "DELETE",
    requestUri: "/packaging_groups/{id}"
  },
  input: {
    shape: DeletePackagingGroupInput
  },
  output: {
    shape: DeletePackagingGroupOutput
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
