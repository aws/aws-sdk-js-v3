import { DeleteIPSetInput } from "../shapes/DeleteIPSetInput";
import { DeleteIPSetOutput } from "../shapes/DeleteIPSetOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteIPSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIPSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIPSetInput
  },
  output: {
    shape: DeleteIPSetOutput
  },
  errors: [
    {
      shape: WAFStaleDataException
    },
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
      shape: WAFNonEmptyEntityException
    }
  ]
};
