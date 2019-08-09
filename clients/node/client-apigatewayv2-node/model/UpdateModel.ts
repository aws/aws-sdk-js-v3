import { UpdateModelInput } from "./UpdateModelInput";
import { UpdateModelOutput } from "./UpdateModelOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateModel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateModel",
  http: {
    method: "PATCH",
    requestUri: "/v2/apis/{apiId}/models/{modelId}"
  },
  input: {
    shape: UpdateModelInput
  },
  output: {
    shape: UpdateModelOutput
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
