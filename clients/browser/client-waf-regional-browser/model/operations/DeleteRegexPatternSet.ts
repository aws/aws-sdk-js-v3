import { DeleteRegexPatternSetInput } from "../shapes/DeleteRegexPatternSetInput";
import { DeleteRegexPatternSetOutput } from "../shapes/DeleteRegexPatternSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRegexPatternSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRegexPatternSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRegexPatternSetInput
  },
  output: {
    shape: DeleteRegexPatternSetOutput
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
