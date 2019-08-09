import { DeletePackagingGroupInput } from "./DeletePackagingGroupInput";
import { DeletePackagingGroupOutput } from "./DeletePackagingGroupOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
