import { DetectStackResourceDriftInput } from "./DetectStackResourceDriftInput";
import { DetectStackResourceDriftOutput } from "./DetectStackResourceDriftOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DetectStackResourceDrift: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetectStackResourceDrift",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetectStackResourceDriftInput
  },
  output: {
    shape: DetectStackResourceDriftOutput,
    resultWrapper: "DetectStackResourceDriftResult"
  },
  errors: []
};
