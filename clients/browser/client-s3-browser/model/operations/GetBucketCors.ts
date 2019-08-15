import { GetBucketCorsInput } from "../shapes/GetBucketCorsInput";
import { GetBucketCorsOutput } from "../shapes/GetBucketCorsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketCors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketCors",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?cors"
  },
  input: {
    shape: GetBucketCorsInput
  },
  output: {
    shape: GetBucketCorsOutput
  },
  errors: []
};
