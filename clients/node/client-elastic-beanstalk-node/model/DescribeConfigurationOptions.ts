import { DescribeConfigurationOptionsInput } from "./DescribeConfigurationOptionsInput";
import { DescribeConfigurationOptionsOutput } from "./DescribeConfigurationOptionsOutput";
import { TooManyBucketsException } from "./TooManyBucketsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
