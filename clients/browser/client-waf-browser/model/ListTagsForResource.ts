import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFBadRequestException } from "./WAFBadRequestException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFBadRequestException
    },
    {
      shape: WAFTagOperationException
    },
    {
      shape: WAFTagOperationInternalErrorException
    }
  ]
};
