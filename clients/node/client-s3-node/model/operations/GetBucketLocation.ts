import { GetBucketLocationInput } from "../shapes/GetBucketLocationInput";
import { GetBucketLocationOutput } from "../shapes/GetBucketLocationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketLocation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketLocation",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?location"
  },
  input: {
    shape: GetBucketLocationInput
  },
  output: {
    shape: GetBucketLocationOutput
  },
  errors: []
};
