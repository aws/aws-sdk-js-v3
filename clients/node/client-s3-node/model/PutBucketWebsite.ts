import { PutBucketWebsiteInput } from "./PutBucketWebsiteInput";
import { PutBucketWebsiteOutput } from "./PutBucketWebsiteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutBucketWebsite: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutBucketWebsite",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}?website"
  },
  input: {
    shape: PutBucketWebsiteInput
  },
  output: {
    shape: PutBucketWebsiteOutput
  },
  errors: []
};
