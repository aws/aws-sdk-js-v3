import { DeletePresetInput } from "./DeletePresetInput";
import { DeletePresetOutput } from "./DeletePresetOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
