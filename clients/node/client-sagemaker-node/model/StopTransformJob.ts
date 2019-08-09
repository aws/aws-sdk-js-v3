import { StopTransformJobInput } from "./StopTransformJobInput";
import { StopTransformJobOutput } from "./StopTransformJobOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StopTransformJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopTransformJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopTransformJobInput
  },
  output: {
    shape: StopTransformJobOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
