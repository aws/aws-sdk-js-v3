import { GetBucketInventoryConfigurationInput } from "../shapes/GetBucketInventoryConfigurationInput";
import { GetBucketInventoryConfigurationOutput } from "../shapes/GetBucketInventoryConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketInventoryConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketInventoryConfiguration",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?inventory"
  },
  input: {
    shape: GetBucketInventoryConfigurationInput
  },
  output: {
    shape: GetBucketInventoryConfigurationOutput
  },
  errors: []
};
