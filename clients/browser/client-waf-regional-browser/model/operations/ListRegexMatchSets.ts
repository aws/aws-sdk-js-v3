import { ListRegexMatchSetsInput } from "../shapes/ListRegexMatchSetsInput";
import { ListRegexMatchSetsOutput } from "../shapes/ListRegexMatchSetsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRegexMatchSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRegexMatchSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRegexMatchSetsInput
  },
  output: {
    shape: ListRegexMatchSetsOutput
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
