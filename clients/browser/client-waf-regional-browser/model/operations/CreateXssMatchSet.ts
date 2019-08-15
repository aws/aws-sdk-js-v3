import { CreateXssMatchSetInput } from "../shapes/CreateXssMatchSetInput";
import { CreateXssMatchSetOutput } from "../shapes/CreateXssMatchSetOutput";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
