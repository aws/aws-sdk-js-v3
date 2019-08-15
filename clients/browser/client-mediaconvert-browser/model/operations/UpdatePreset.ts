import { UpdatePresetInput } from "../shapes/UpdatePresetInput";
import { UpdatePresetOutput } from "../shapes/UpdatePresetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePreset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePreset",
  http: {
    method: "PUT",
    requestUri: "/2017-08-29/presets/{name}"
  },
  input: {
    shape: UpdatePresetInput
  },
  output: {
    shape: UpdatePresetOutput
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
