import { CreateVirtualServiceInput } from "./CreateVirtualServiceInput";
import { CreateVirtualServiceOutput } from "./CreateVirtualServiceOutput";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateVirtualService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVirtualService",
  http: {
    method: "PUT",
    requestUri: "/v20190125/meshes/{meshName}/virtualServices"
  },
  input: {
    shape: CreateVirtualServiceInput
  },
  output: {
    shape: CreateVirtualServiceOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: LimitExceededException
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
