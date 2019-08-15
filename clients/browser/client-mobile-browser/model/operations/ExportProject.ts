import { ExportProjectInput } from "../shapes/ExportProjectInput";
import { ExportProjectOutput } from "../shapes/ExportProjectOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
