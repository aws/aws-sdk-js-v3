import { ListRegexPatternSetsInput } from "./ListRegexPatternSetsInput";
import { ListRegexPatternSetsOutput } from "./ListRegexPatternSetsOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRegexPatternSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRegexPatternSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListRegexPatternSetsInput
  },
  output: {
    shape: ListRegexPatternSetsOutput
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
