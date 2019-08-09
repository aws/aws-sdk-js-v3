import { UpdateSqlInjectionMatchSetInput } from "./UpdateSqlInjectionMatchSetInput";
import { UpdateSqlInjectionMatchSetOutput } from "./UpdateSqlInjectionMatchSetOutput";
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

export const UpdateSqlInjectionMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSqlInjectionMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSqlInjectionMatchSetInput
  },
  output: {
    shape: UpdateSqlInjectionMatchSetOutput
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
