import { TestMetricFilterInput } from "./TestMetricFilterInput";
import { TestMetricFilterOutput } from "./TestMetricFilterOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
