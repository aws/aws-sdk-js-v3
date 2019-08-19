import { DetectStackResourceDriftInput } from "../shapes/DetectStackResourceDriftInput";
import { DetectStackResourceDriftOutput } from "../shapes/DetectStackResourceDriftOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
