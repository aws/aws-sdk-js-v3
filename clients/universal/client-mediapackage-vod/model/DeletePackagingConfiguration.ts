import { DeletePackagingConfigurationInput } from "./DeletePackagingConfigurationInput";
import { DeletePackagingConfigurationOutput } from "./DeletePackagingConfigurationOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
