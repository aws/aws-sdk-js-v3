import { ExportProjectInput } from "./ExportProjectInput";
import { ExportProjectOutput } from "./ExportProjectOutput";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ExportProject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportProject",
  http: {
    method: "POST",
    requestUri: "/exports/{projectId}"
  },
  input: {
    shape: ExportProjectInput
  },
  output: {
    shape: ExportProjectOutput
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
    }
  ]
};
