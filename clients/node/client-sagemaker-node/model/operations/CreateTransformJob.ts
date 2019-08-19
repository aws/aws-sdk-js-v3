import { CreateTransformJobInput } from "../shapes/CreateTransformJobInput";
import { CreateTransformJobOutput } from "../shapes/CreateTransformJobOutput";
import { ResourceInUse } from "../shapes/ResourceInUse";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
