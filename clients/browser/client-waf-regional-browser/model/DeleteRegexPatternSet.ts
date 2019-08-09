import { DeleteRegexPatternSetInput } from "./DeleteRegexPatternSetInput";
import { DeleteRegexPatternSetOutput } from "./DeleteRegexPatternSetOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
