import { UpdateApiInput } from "./UpdateApiInput";
import { UpdateApiOutput } from "./UpdateApiOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
