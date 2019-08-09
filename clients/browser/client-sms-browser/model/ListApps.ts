import { ListAppsInput } from "./ListAppsInput";
import { ListAppsOutput } from "./ListAppsOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
