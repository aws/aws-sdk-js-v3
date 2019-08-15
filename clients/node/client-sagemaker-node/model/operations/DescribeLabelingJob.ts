import { DescribeLabelingJobInput } from "../shapes/DescribeLabelingJobInput";
import { DescribeLabelingJobOutput } from "../shapes/DescribeLabelingJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLabelingJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLabelingJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLabelingJobInput
  },
  output: {
    shape: DescribeLabelingJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
