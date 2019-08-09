import { GetStreamingDistributionInput } from "./GetStreamingDistributionInput";
import { GetStreamingDistributionOutput } from "./GetStreamingDistributionOutput";
import { NoSuchStreamingDistribution } from "./NoSuchStreamingDistribution";
import { AccessDenied } from "./AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetStreamingDistribution2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStreamingDistribution2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/streaming-distribution/{Id}"
  },
  input: {
    shape: GetStreamingDistributionInput
  },
  output: {
    shape: GetStreamingDistributionOutput
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
