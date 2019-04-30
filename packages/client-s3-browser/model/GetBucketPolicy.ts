import { GetBucketPolicyInput } from "./GetBucketPolicyInput";
import { GetBucketPolicyOutput } from "./GetBucketPolicyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetBucketPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketPolicy",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?policy"
  },
  input: {
    shape: GetBucketPolicyInput
  },
  output: {
    shape: GetBucketPolicyOutput
  },
  errors: []
};
