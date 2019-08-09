import { ListEntitlementsInput } from "./ListEntitlementsInput";
import { ListEntitlementsOutput } from "./ListEntitlementsOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
