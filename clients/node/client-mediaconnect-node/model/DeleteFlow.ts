import { DeleteFlowInput } from "./DeleteFlowInput";
import { DeleteFlowOutput } from "./DeleteFlowOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFlow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFlow",
  http: {
    method: "DELETE",
    requestUri: "/v1/flows/{flowArn}"
  },
  input: {
    shape: DeleteFlowInput
  },
  output: {
    shape: DeleteFlowOutput
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
