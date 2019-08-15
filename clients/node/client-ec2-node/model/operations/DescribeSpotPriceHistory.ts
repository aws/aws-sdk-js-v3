import { DescribeSpotPriceHistoryInput } from "../shapes/DescribeSpotPriceHistoryInput";
import { DescribeSpotPriceHistoryOutput } from "../shapes/DescribeSpotPriceHistoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSpotPriceHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSpotPriceHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSpotPriceHistoryInput
  },
  output: {
    shape: DescribeSpotPriceHistoryOutput
  },
  errors: []
};
