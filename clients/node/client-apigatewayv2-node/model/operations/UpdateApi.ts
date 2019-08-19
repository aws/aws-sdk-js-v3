import { UpdateApiInput } from "../shapes/UpdateApiInput";
import { UpdateApiOutput } from "../shapes/UpdateApiOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApi",
  http: {
    method: "PATCH",
    requestUri: "/v2/apis/{apiId}"
  },
  input: {
    shape: UpdateApiInput
  },
  output: {
    shape: UpdateApiOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
