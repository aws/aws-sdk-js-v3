import { ListByteMatchSetsInput } from "./ListByteMatchSetsInput";
import { ListByteMatchSetsOutput } from "./ListByteMatchSetsOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListByteMatchSets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListByteMatchSets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListByteMatchSetsInput
  },
  output: {
    shape: ListByteMatchSetsOutput
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
