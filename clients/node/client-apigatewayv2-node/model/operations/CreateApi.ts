import { CreateApiInput } from "../shapes/CreateApiInput";
import { CreateApiOutput } from "../shapes/CreateApiOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApi: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApi",
  http: {
    method: "POST",
    requestUri: "/v2/apis"
  },
  input: {
    shape: CreateApiInput
  },
  output: {
    shape: CreateApiOutput
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
