import { GetSqlInjectionMatchSetInput } from "./GetSqlInjectionMatchSetInput";
import { GetSqlInjectionMatchSetOutput } from "./GetSqlInjectionMatchSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetSqlInjectionMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSqlInjectionMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSqlInjectionMatchSetInput
  },
  output: {
    shape: GetSqlInjectionMatchSetOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFNonexistentItemException
    }
  ]
};
