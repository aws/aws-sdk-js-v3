import { GetSqlInjectionMatchSetInput } from "../shapes/GetSqlInjectionMatchSetInput";
import { GetSqlInjectionMatchSetOutput } from "../shapes/GetSqlInjectionMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
