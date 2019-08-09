import { DetectStackDriftInput } from "./DetectStackDriftInput";
import { DetectStackDriftOutput } from "./DetectStackDriftOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetectStackDrift: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectStackDrift",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectStackDriftInput
  },
  output: {
    shape: DetectStackDriftOutput,
    resultWrapper: "DetectStackDriftResult"
  },
  errors: []
};
