import { ListSizeConstraintSetsInput } from "./ListSizeConstraintSetsInput";
import { ListSizeConstraintSetsOutput } from "./ListSizeConstraintSetsOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSizeConstraintSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSizeConstraintSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSizeConstraintSetsInput
  },
  output: {
    shape: ListSizeConstraintSetsOutput
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
