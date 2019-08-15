import { DeleteByteMatchSetInput } from "../shapes/DeleteByteMatchSetInput";
import { DeleteByteMatchSetOutput } from "../shapes/DeleteByteMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteByteMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteByteMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteByteMatchSetInput
  },
  output: {
    shape: DeleteByteMatchSetOutput
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
