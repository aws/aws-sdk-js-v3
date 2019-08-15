import { CreateLabelingJobInput } from "../shapes/CreateLabelingJobInput";
import { CreateLabelingJobOutput } from "../shapes/CreateLabelingJobOutput";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLabelingJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLabelingJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLabelingJobInput
  },
  output: {
    shape: CreateLabelingJobOutput
  },
  errors: [
    {
      shape: ResourceInUse
    },
    {
      shape: ResourceLimitExceeded
    }
  ]
};
