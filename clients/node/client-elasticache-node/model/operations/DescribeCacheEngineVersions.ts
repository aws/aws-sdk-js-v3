import { DescribeCacheEngineVersionsInput } from "../shapes/DescribeCacheEngineVersionsInput";
import { DescribeCacheEngineVersionsOutput } from "../shapes/DescribeCacheEngineVersionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCacheEngineVersions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCacheEngineVersions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCacheEngineVersionsInput
  },
  output: {
    shape: DescribeCacheEngineVersionsOutput,
    resultWrapper: "DescribeCacheEngineVersionsResult"
  },
  errors: []
};
