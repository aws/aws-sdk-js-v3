import { PutBucketPolicyInput } from "../shapes/PutBucketPolicyInput";
import { PutBucketPolicyOutput } from "../shapes/PutBucketPolicyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutBucketPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketPolicy",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?policy"
  },
  input: {
    shape: PutBucketPolicyInput
  },
  output: {
    shape: PutBucketPolicyOutput
  },
  errors: []
};
