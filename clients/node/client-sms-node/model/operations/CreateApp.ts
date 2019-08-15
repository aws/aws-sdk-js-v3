import { CreateAppInput } from "../shapes/CreateAppInput";
import { CreateAppOutput } from "../shapes/CreateAppOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAppInput
  },
  output: {
    shape: CreateAppOutput
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
