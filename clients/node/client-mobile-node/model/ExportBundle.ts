import { ExportBundleInput } from "./ExportBundleInput";
import { ExportBundleOutput } from "./ExportBundleOutput";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
