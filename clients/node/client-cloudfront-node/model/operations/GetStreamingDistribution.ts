import { GetStreamingDistributionInput } from "../shapes/GetStreamingDistributionInput";
import { GetStreamingDistributionOutput } from "../shapes/GetStreamingDistributionOutput";
import { NoSuchStreamingDistribution } from "../shapes/NoSuchStreamingDistribution";
import { AccessDenied } from "../shapes/AccessDenied";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetStreamingDistribution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStreamingDistribution",
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
