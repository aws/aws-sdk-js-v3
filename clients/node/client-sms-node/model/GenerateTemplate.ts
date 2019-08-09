import { GenerateTemplateInput } from "./GenerateTemplateInput";
import { GenerateTemplateOutput } from "./GenerateTemplateOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { InternalError } from "./InternalError";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GenerateTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GenerateTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GenerateTemplateInput
  },
  output: {
    shape: GenerateTemplateOutput
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
