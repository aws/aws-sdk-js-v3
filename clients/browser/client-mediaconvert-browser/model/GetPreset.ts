import { GetPresetInput } from "./GetPresetInput";
import { GetPresetOutput } from "./GetPresetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
