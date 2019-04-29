import { PutBucketRequestPaymentInput } from "./PutBucketRequestPaymentInput";
import { PutBucketRequestPaymentOutput } from "./PutBucketRequestPaymentOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutBucketRequestPayment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketRequestPayment",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?requestPayment"
  },
  input: {
    shape: PutBucketRequestPaymentInput
  },
  output: {
    shape: PutBucketRequestPaymentOutput
  },
  errors: []
};
