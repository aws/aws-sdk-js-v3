import { ListSizeConstraintSetsInput } from "../shapes/ListSizeConstraintSetsInput";
import { ListSizeConstraintSetsOutput } from "../shapes/ListSizeConstraintSetsOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
