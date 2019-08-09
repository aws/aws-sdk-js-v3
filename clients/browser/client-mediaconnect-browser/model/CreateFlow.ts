import { CreateFlowInput } from "./CreateFlowInput";
import { CreateFlowOutput } from "./CreateFlowOutput";
import { CreateFlow420Exception } from "./CreateFlow420Exception";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
