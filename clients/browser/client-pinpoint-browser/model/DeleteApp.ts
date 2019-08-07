import { DeleteAppInput } from "./DeleteAppInput";
import { DeleteAppOutput } from "./DeleteAppOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApp",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}"
  },
  input: {
    shape: DeleteAppInput
  },
  output: {
    shape: DeleteAppOutput
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
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
