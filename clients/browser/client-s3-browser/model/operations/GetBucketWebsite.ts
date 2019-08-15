import { GetBucketWebsiteInput } from "../shapes/GetBucketWebsiteInput";
import { GetBucketWebsiteOutput } from "../shapes/GetBucketWebsiteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketWebsite: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketWebsite",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?website"
  },
  input: {
    shape: GetBucketWebsiteInput
  },
  output: {
    shape: GetBucketWebsiteOutput
  },
  errors: []
};
