import { ExportBundleInput } from "../shapes/ExportBundleInput";
import { ExportBundleOutput } from "../shapes/ExportBundleOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExportBundle: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportBundle",
  http: {
    method: "POST",
    requestUri: "/bundles/{bundleId}"
  },
  input: {
    shape: ExportBundleInput
  },
  output: {
    shape: ExportBundleOutput
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
