import { GetBucketPolicyStatusInput } from "../shapes/GetBucketPolicyStatusInput";
import { GetBucketPolicyStatusOutput } from "../shapes/GetBucketPolicyStatusOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketPolicyStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketPolicyStatus",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?policyStatus"
  },
  input: {
    shape: GetBucketPolicyStatusInput
  },
  output: {
    shape: GetBucketPolicyStatusOutput
  },
  errors: []
};
