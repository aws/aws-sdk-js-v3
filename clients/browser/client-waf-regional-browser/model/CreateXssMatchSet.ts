import { CreateXssMatchSetInput } from "./CreateXssMatchSetInput";
import { CreateXssMatchSetOutput } from "./CreateXssMatchSetOutput";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateXssMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateXssMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateXssMatchSetInput
  },
  output: {
    shape: CreateXssMatchSetOutput
  },
  errors: [
    {
      shape: WAFDisallowedNameException
    },
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFLimitsExceededException
    }
  ]
};
