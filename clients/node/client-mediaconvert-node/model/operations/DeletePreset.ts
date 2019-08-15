import { DeletePresetInput } from "../shapes/DeletePresetInput";
import { DeletePresetOutput } from "../shapes/DeletePresetOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePreset: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePreset",
  http: {
    method: "DELETE",
    requestUri: "/2017-08-29/presets/{name}"
  },
  input: {
    shape: DeletePresetInput
  },
  output: {
    shape: DeletePresetOutput
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
