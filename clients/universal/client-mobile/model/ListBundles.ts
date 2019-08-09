import { ListBundlesInput } from "./ListBundlesInput";
import { ListBundlesOutput } from "./ListBundlesOutput";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
