import { DescribeHyperParameterTuningJobInput } from "../shapes/DescribeHyperParameterTuningJobInput";
import { DescribeHyperParameterTuningJobOutput } from "../shapes/DescribeHyperParameterTuningJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
