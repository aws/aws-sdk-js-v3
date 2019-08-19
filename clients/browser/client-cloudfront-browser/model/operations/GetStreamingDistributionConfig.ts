import { GetStreamingDistributionConfigInput } from "../shapes/GetStreamingDistributionConfigInput";
import { GetStreamingDistributionConfigOutput } from "../shapes/GetStreamingDistributionConfigOutput";
import { NoSuchStreamingDistribution } from "../shapes/NoSuchStreamingDistribution";
import { AccessDenied } from "../shapes/AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetStreamingDistributionConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStreamingDistributionConfig",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/streaming-distribution/{Id}/config"
  },
  input: {
    shape: GetStreamingDistributionConfigInput
  },
  output: {
    shape: GetStreamingDistributionConfigOutput
  },
  errors: [
    {
      shape: NoSuchStreamingDistribution
    },
    {
      shape: AccessDenied
    }
  ]
};
