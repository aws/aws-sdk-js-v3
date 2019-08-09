import { ListXssMatchSetsInput } from "./ListXssMatchSetsInput";
import { ListXssMatchSetsOutput } from "./ListXssMatchSetsOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListXssMatchSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListXssMatchSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListXssMatchSetsInput
  },
  output: {
    shape: ListXssMatchSetsOutput
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
