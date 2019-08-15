import { DeleteXssMatchSetInput } from "../shapes/DeleteXssMatchSetInput";
import { DeleteXssMatchSetOutput } from "../shapes/DeleteXssMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
