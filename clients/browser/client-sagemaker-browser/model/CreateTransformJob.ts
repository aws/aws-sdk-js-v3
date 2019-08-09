import { CreateTransformJobInput } from "./CreateTransformJobInput";
import { CreateTransformJobOutput } from "./CreateTransformJobOutput";
import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTransformJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTransformJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTransformJobInput
  },
  output: {
    shape: CreateTransformJobOutput
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
