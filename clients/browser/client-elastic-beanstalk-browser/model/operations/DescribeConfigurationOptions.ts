import { DescribeConfigurationOptionsInput } from "../shapes/DescribeConfigurationOptionsInput";
import { DescribeConfigurationOptionsOutput } from "../shapes/DescribeConfigurationOptionsOutput";
import { TooManyBucketsException } from "../shapes/TooManyBucketsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConfigurationOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigurationOptionsInput
  },
  output: {
    shape: DescribeConfigurationOptionsOutput,
    resultWrapper: "DescribeConfigurationOptionsResult"
  },
  errors: [
    {
      shape: TooManyBucketsException
    }
  ]
};
