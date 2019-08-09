import { DeleteXssMatchSetInput } from "./DeleteXssMatchSetInput";
import { DeleteXssMatchSetOutput } from "./DeleteXssMatchSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteXssMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteXssMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteXssMatchSetInput
  },
  output: {
    shape: DeleteXssMatchSetOutput
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
    },
    {
      shape: WAFReferencedItemException
    },
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFNonEmptyEntityException
    }
  ]
};
