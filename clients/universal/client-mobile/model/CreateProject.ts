import { CreateProjectInput } from "./CreateProjectInput";
import { CreateProjectOutput } from "./CreateProjectOutput";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProject",
  http: {
    method: "POST",
    requestUri: "/projects"
  },
  input: {
    shape: CreateProjectInput
  },
  output: {
    shape: CreateProjectOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
