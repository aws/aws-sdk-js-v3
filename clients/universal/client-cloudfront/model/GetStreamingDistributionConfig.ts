import { GetStreamingDistributionConfigInput } from "./GetStreamingDistributionConfigInput";
import { GetStreamingDistributionConfigOutput } from "./GetStreamingDistributionConfigOutput";
import { NoSuchStreamingDistribution } from "./NoSuchStreamingDistribution";
import { AccessDenied } from "./AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetStreamingDistributionConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStreamingDistributionConfig2019_03_26",
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
