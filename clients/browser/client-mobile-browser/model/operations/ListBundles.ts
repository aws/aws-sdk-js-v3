import { ListBundlesInput } from "../shapes/ListBundlesInput";
import { ListBundlesOutput } from "../shapes/ListBundlesOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBundles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBundles",
  http: {
    method: "GET",
    requestUri: "/bundles"
  },
  input: {
    shape: ListBundlesInput
  },
  output: {
    shape: ListBundlesOutput
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
    }
  ]
};
