import { ListPresetsInput } from "../shapes/ListPresetsInput";
import { ListPresetsOutput } from "../shapes/ListPresetsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPresets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPresets",
  http: {
    method: "GET",
    requestUri: "/2017-08-29/presets"
  },
  input: {
    shape: ListPresetsInput
  },
  output: {
    shape: ListPresetsOutput
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
