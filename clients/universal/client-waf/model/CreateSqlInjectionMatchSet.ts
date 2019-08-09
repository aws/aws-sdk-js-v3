import { CreateSqlInjectionMatchSetInput } from "./CreateSqlInjectionMatchSetInput";
import { CreateSqlInjectionMatchSetOutput } from "./CreateSqlInjectionMatchSetOutput";
import { WAFDisallowedNameException } from "./WAFDisallowedNameException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFLimitsExceededException } from "./WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSqlInjectionMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSqlInjectionMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSqlInjectionMatchSetInput
  },
  output: {
    shape: CreateSqlInjectionMatchSetOutput
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
