import { TestMetricFilterInput } from "../shapes/TestMetricFilterInput";
import { TestMetricFilterOutput } from "../shapes/TestMetricFilterOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestMetricFilter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestMetricFilter",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TestMetricFilterInput
  },
  output: {
    shape: TestMetricFilterOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
