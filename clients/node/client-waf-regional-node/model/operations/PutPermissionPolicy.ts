import { PutPermissionPolicyInput } from "../shapes/PutPermissionPolicyInput";
import { PutPermissionPolicyOutput } from "../shapes/PutPermissionPolicyOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFInvalidPermissionPolicyException } from "../shapes/WAFInvalidPermissionPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutPermissionPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutPermissionPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutPermissionPolicyInput
  },
  output: {
    shape: PutPermissionPolicyOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFInvalidPermissionPolicyException
    }
  ]
};
