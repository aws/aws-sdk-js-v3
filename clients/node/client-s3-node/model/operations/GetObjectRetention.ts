import { GetObjectRetentionInput } from "../shapes/GetObjectRetentionInput";
import { GetObjectRetentionOutput } from "../shapes/GetObjectRetentionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetObjectRetention: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetObjectRetention",
  http: {
    method: "GET",
    requestUri: "/{Bucket}/{Key+}?retention"
  },
  input: {
    shape: GetObjectRetentionInput
  },
  output: {
    shape: GetObjectRetentionOutput
  },
  errors: []
};
