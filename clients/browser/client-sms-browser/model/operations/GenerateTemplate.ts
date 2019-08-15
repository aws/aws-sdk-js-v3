import { GenerateTemplateInput } from "../shapes/GenerateTemplateInput";
import { GenerateTemplateOutput } from "../shapes/GenerateTemplateOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { InternalError } from "../shapes/InternalError";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
