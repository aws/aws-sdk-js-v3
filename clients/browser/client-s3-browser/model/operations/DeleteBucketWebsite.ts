import { DeleteBucketWebsiteInput } from "../shapes/DeleteBucketWebsiteInput";
import { DeleteBucketWebsiteOutput } from "../shapes/DeleteBucketWebsiteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBucketWebsite: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBucketWebsite",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}?website"
  },
  input: {
    shape: DeleteBucketWebsiteInput
  },
  output: {
    shape: DeleteBucketWebsiteOutput
  },
  errors: []
};
