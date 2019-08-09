import { DeleteRateBasedRuleInput } from "./DeleteRateBasedRuleInput";
import { DeleteRateBasedRuleOutput } from "./DeleteRateBasedRuleOutput";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFReferencedItemException } from "./WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "./WAFNonEmptyEntityException";
import { WAFTagOperationException } from "./WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "./WAFTagOperationInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRateBasedRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRateBasedRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRateBasedRuleInput
  },
  output: {
    shape: DeleteRateBasedRuleOutput
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
    },
    {
      shape: WAFTagOperationException
    },
    {
      shape: WAFTagOperationInternalErrorException
    }
  ]
};
