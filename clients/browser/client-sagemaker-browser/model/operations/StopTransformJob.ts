import { StopTransformJobInput } from "../shapes/StopTransformJobInput";
import { StopTransformJobOutput } from "../shapes/StopTransformJobOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
