import { DeletePermissionPolicyInput } from "../shapes/DeletePermissionPolicyInput";
import { DeletePermissionPolicyOutput } from "../shapes/DeletePermissionPolicyOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
