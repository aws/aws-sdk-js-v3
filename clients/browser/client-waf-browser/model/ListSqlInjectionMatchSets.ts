import { ListSqlInjectionMatchSetsInput } from "./ListSqlInjectionMatchSetsInput";
import { ListSqlInjectionMatchSetsOutput } from "./ListSqlInjectionMatchSetsOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
