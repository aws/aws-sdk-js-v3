import { UpdateConfigurationInput } from "../shapes/UpdateConfigurationInput";
import { UpdateConfigurationOutput } from "../shapes/UpdateConfigurationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ConflictException } from "../shapes/ConflictException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfiguration",
  http: {
    method: "PUT",
    requestUri: "/v1/configurations/{configuration-id}"
  },
  input: {
    shape: UpdateConfigurationInput
  },
  output: {
    shape: UpdateConfigurationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ConflictException
    },
    {
      shape: ForbiddenException
    }
  ]
};
