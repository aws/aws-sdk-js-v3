import { GenerateChangeSetInput } from "./GenerateChangeSetInput";
import { GenerateChangeSetOutput } from "./GenerateChangeSetOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
