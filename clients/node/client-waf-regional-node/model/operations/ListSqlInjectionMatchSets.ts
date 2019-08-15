import { ListSqlInjectionMatchSetsInput } from "../shapes/ListSqlInjectionMatchSetsInput";
import { ListSqlInjectionMatchSetsOutput } from "../shapes/ListSqlInjectionMatchSetsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSqlInjectionMatchSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSqlInjectionMatchSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSqlInjectionMatchSetsInput
  },
  output: {
    shape: ListSqlInjectionMatchSetsOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    }
  ]
};
