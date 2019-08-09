import { CreatePresetInput } from "./CreatePresetInput";
import { CreatePresetOutput } from "./CreatePresetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
