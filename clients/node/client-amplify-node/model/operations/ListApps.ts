import { ListAppsInput } from "../shapes/ListAppsInput";
import { ListAppsOutput } from "../shapes/ListAppsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListApps: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApps",
  http: {
    method: "GET",
    requestUri: "/apps"
  },
  input: {
    shape: ListAppsInput
  },
  output: {
    shape: ListAppsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    }
  ]
};
