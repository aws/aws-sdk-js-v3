import { CreateFlowInput } from "../shapes/CreateFlowInput";
import { CreateFlowOutput } from "../shapes/CreateFlowOutput";
import { CreateFlow420Exception } from "../shapes/CreateFlow420Exception";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFlow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFlow",
  http: {
    method: "POST",
    requestUri: "/v1/flows"
  },
  input: {
    shape: CreateFlowInput
  },
  output: {
    shape: CreateFlowOutput
  },
  errors: [
    {
      shape: CreateFlow420Exception
    },
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
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
