import { CreatePresetInput } from "../shapes/CreatePresetInput";
import { CreatePresetOutput } from "../shapes/CreatePresetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePreset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePreset",
  http: {
    method: "POST",
    requestUri: "/2017-08-29/presets"
  },
  input: {
    shape: CreatePresetInput
  },
  output: {
    shape: CreatePresetOutput
  },
  errors: [
    {
      shape: BadRequestException
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
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
