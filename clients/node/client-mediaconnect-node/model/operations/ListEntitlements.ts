import { ListEntitlementsInput } from "../shapes/ListEntitlementsInput";
import { ListEntitlementsOutput } from "../shapes/ListEntitlementsOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListEntitlements: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEntitlements",
  http: {
    method: "GET",
    requestUri: "/v1/entitlements"
  },
  input: {
    shape: ListEntitlementsInput
  },
  output: {
    shape: ListEntitlementsOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
