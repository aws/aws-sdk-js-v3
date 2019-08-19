import { DeletePackagingConfigurationInput } from "../shapes/DeletePackagingConfigurationInput";
import { DeletePackagingConfigurationOutput } from "../shapes/DeletePackagingConfigurationOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePackagingConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePackagingConfiguration",
  http: {
    method: "DELETE",
    requestUri: "/packaging_configurations/{id}"
  },
  input: {
    shape: DeletePackagingConfigurationInput
  },
  output: {
    shape: DeletePackagingConfigurationOutput
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
