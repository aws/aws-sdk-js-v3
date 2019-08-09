import { CreateApiInput } from "./CreateApiInput";
import { CreateApiOutput } from "./CreateApiOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
