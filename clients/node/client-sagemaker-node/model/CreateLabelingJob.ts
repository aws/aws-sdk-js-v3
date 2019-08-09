import { CreateLabelingJobInput } from "./CreateLabelingJobInput";
import { CreateLabelingJobOutput } from "./CreateLabelingJobOutput";
import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
