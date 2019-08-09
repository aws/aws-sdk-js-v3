import { DeletePermissionPolicyInput } from "./DeletePermissionPolicyInput";
import { DeletePermissionPolicyOutput } from "./DeletePermissionPolicyOutput";
import { WAFInternalErrorException } from "./WAFInternalErrorException";
import { WAFStaleDataException } from "./WAFStaleDataException";
import { WAFNonexistentItemException } from "./WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePermissionPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePermissionPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePermissionPolicyInput
  },
  output: {
    shape: DeletePermissionPolicyOutput
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
    }
  ]
};
