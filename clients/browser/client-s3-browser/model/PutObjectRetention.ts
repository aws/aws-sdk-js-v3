import { PutObjectRetentionInput } from "./PutObjectRetentionInput";
import { PutObjectRetentionOutput } from "./PutObjectRetentionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutObjectRetention: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutObjectRetention",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}/{Key+}?retention"
  },
  input: {
    shape: PutObjectRetentionInput
  },
  output: {
    shape: PutObjectRetentionOutput
  },
  errors: []
};
