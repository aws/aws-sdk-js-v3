import { UpdateAppInput } from "./UpdateAppInput";
import { UpdateAppOutput } from "./UpdateAppOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateApp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAppInput
  },
  output: {
    shape: UpdateAppOutput
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
