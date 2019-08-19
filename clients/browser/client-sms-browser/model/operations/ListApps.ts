import { ListAppsInput } from "../shapes/ListAppsInput";
import { ListAppsOutput } from "../shapes/ListAppsOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListApps: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListApps",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAppsInput
  },
  output: {
    shape: ListAppsOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: InternalError
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
