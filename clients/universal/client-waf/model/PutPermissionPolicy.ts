import { PutPermissionPolicyInput } from "./PutPermissionPolicyInput";
import { PutPermissionPolicyOutput } from "./PutPermissionPolicyOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { WAFInvalidPermissionPolicyException } from "./WAFInvalidPermissionPolicyException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
