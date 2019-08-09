import { UpdateFlowSourceInput } from "./UpdateFlowSourceInput";
import { UpdateFlowSourceOutput } from "./UpdateFlowSourceOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateFlowSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFlowSource",
  http: {
    method: "PUT",
    requestUri: "/v1/flows/{flowArn}/source/{sourceArn}"
  },
  input: {
    shape: UpdateFlowSourceInput
  },
  output: {
    shape: UpdateFlowSourceOutput
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
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
