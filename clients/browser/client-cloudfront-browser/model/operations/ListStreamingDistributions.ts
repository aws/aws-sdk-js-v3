import { ListStreamingDistributionsInput } from "../shapes/ListStreamingDistributionsInput";
import { ListStreamingDistributionsOutput } from "../shapes/ListStreamingDistributionsOutput";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStreamingDistributions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStreamingDistributions",
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
