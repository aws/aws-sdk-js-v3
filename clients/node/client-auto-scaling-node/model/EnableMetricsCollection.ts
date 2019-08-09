import { EnableMetricsCollectionInput } from "./EnableMetricsCollectionInput";
import { EnableMetricsCollectionOutput } from "./EnableMetricsCollectionOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableMetricsCollection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableMetricsCollection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableMetricsCollectionInput
  },
  output: {
    shape: EnableMetricsCollectionOutput
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
