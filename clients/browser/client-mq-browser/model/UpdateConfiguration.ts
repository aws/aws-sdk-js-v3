import { UpdateConfigurationInput } from "./UpdateConfigurationInput";
import { UpdateConfigurationOutput } from "./UpdateConfigurationOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
