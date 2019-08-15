import { GetPermissionPolicyInput } from "../shapes/GetPermissionPolicyInput";
import { GetPermissionPolicyOutput } from "../shapes/GetPermissionPolicyOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPermissionPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPermissionPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPermissionPolicyInput
  },
  output: {
    shape: GetPermissionPolicyOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFNonexistentItemException
    }
  ]
};
