import { UpdateEndpointWeightsAndCapacitiesInput } from "./UpdateEndpointWeightsAndCapacitiesInput";
import { UpdateEndpointWeightsAndCapacitiesOutput } from "./UpdateEndpointWeightsAndCapacitiesOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateEndpointWeightsAndCapacities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEndpointWeightsAndCapacities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEndpointWeightsAndCapacitiesInput
  },
  output: {
    shape: UpdateEndpointWeightsAndCapacitiesOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
