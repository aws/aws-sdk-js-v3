import { GenerateChangeSetInput } from "../shapes/GenerateChangeSetInput";
import { GenerateChangeSetOutput } from "../shapes/GenerateChangeSetOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GenerateChangeSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateChangeSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GenerateChangeSetInput
  },
  output: {
    shape: GenerateChangeSetOutput
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
