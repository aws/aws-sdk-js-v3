import { ListStreamingDistributionsInput } from "./ListStreamingDistributionsInput";
import { ListStreamingDistributionsOutput } from "./ListStreamingDistributionsOutput";
import { InvalidArgument } from "./InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListStreamingDistributions2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStreamingDistributions2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/streaming-distribution"
  },
  input: {
    shape: ListStreamingDistributionsInput
  },
  output: {
    shape: ListStreamingDistributionsOutput
  },
  errors: [
    {
      shape: InvalidArgument
    }
  ]
};
