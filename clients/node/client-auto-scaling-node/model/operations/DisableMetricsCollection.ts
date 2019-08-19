import { DisableMetricsCollectionInput } from "../shapes/DisableMetricsCollectionInput";
import { DisableMetricsCollectionOutput } from "../shapes/DisableMetricsCollectionOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableMetricsCollection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableMetricsCollection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableMetricsCollectionInput
  },
  output: {
    shape: DisableMetricsCollectionOutput
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
