import { DescribeHyperParameterTuningJobInput } from "./DescribeHyperParameterTuningJobInput";
import { DescribeHyperParameterTuningJobOutput } from "./DescribeHyperParameterTuningJobOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeHyperParameterTuningJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeHyperParameterTuningJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeHyperParameterTuningJobInput
  },
  output: {
    shape: DescribeHyperParameterTuningJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
