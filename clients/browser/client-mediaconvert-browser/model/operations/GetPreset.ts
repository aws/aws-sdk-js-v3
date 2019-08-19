import { GetPresetInput } from "../shapes/GetPresetInput";
import { GetPresetOutput } from "../shapes/GetPresetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPreset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPreset",
  http: {
    method: "GET",
    requestUri: "/2017-08-29/presets/{name}"
  },
  input: {
    shape: GetPresetInput
  },
  output: {
    shape: GetPresetOutput
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
