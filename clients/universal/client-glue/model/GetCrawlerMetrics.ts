import { GetCrawlerMetricsInput } from "./GetCrawlerMetricsInput";
import { GetCrawlerMetricsOutput } from "./GetCrawlerMetricsOutput";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCrawlerMetrics: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCrawlerMetrics",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCrawlerMetricsInput
  },
  output: {
    shape: GetCrawlerMetricsOutput
  },
  errors: [
    {
      shape: OperationTimeoutException
    }
  ]
};
