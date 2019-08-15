import { DeleteRateBasedRuleInput } from "../shapes/DeleteRateBasedRuleInput";
import { DeleteRateBasedRuleOutput } from "../shapes/DeleteRateBasedRuleOutput";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFReferencedItemException } from "../shapes/WAFReferencedItemException";
import { WAFNonEmptyEntityException } from "../shapes/WAFNonEmptyEntityException";
import { WAFTagOperationException } from "../shapes/WAFTagOperationException";
import { WAFTagOperationInternalErrorException } from "../shapes/WAFTagOperationInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
