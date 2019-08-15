import { CreateSqlInjectionMatchSetInput } from "../shapes/CreateSqlInjectionMatchSetInput";
import { CreateSqlInjectionMatchSetOutput } from "../shapes/CreateSqlInjectionMatchSetOutput";
import { WAFDisallowedNameException } from "../shapes/WAFDisallowedNameException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
