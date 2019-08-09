import { DeleteSizeConstraintSetInput } from "./DeleteSizeConstraintSetInput";
import { DeleteSizeConstraintSetOutput } from "./DeleteSizeConstraintSetOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSizeConstraintSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSizeConstraintSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSizeConstraintSetInput
  },
  output: {
    shape: DeleteSizeConstraintSetOutput
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
