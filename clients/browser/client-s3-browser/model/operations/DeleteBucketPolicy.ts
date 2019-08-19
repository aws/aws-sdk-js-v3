import { DeleteBucketPolicyInput } from "../shapes/DeleteBucketPolicyInput";
import { DeleteBucketPolicyOutput } from "../shapes/DeleteBucketPolicyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBucketPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucketPolicy",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?policy"
  },
  input: {
    shape: DeleteBucketPolicyInput
  },
  output: {
    shape: DeleteBucketPolicyOutput
  },
  errors: []
};
