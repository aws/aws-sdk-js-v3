import { UpdateXssMatchSetInput } from "./UpdateXssMatchSetInput";
import { UpdateXssMatchSetOutput } from "./UpdateXssMatchSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidOperationException } from "./WAFInvalidOperationException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentContainerException } from "./WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateXssMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateXssMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateXssMatchSetInput
  },
  output: {
    shape: UpdateXssMatchSetOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFInvalidOperationException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFNonexistentContainerException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFLimitsExceededException
    }
  ]
};
