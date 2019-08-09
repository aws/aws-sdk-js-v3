import { CreateConfigurationInput } from "./CreateConfigurationInput";
import { CreateConfigurationOutput } from "./CreateConfigurationOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfiguration",
  http: {
    method: "POST",
    requestUri: "/v1/configurations"
  },
  input: {
    shape: CreateConfigurationInput
  },
  output: {
    shape: CreateConfigurationOutput
  },
  errors: [
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
