import { ListPresetsInput } from "./ListPresetsInput";
import { ListPresetsOutput } from "./ListPresetsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
