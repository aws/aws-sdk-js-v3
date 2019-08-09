import { ListAppsInput } from "./ListAppsInput";
import { ListAppsOutput } from "./ListAppsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
