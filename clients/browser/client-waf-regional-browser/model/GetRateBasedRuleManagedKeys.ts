import { GetRateBasedRuleManagedKeysInput } from "./GetRateBasedRuleManagedKeysInput";
import { GetRateBasedRuleManagedKeysOutput } from "./GetRateBasedRuleManagedKeysOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFInvalidAccountException } from "./WAFInvalidAccountException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidParameterException } from "./WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRateBasedRuleManagedKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRateBasedRuleManagedKeys",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRateBasedRuleManagedKeysInput
  },
  output: {
    shape: GetRateBasedRuleManagedKeysOutput
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
      shape: WAFInvalidParameterException
    }
  ]
};
