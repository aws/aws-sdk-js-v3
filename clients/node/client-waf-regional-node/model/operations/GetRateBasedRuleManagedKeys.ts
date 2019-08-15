import { GetRateBasedRuleManagedKeysInput } from "../shapes/GetRateBasedRuleManagedKeysInput";
import { GetRateBasedRuleManagedKeysOutput } from "../shapes/GetRateBasedRuleManagedKeysOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
