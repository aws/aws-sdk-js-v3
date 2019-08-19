import { DeleteScheduledActionInput } from "../shapes/DeleteScheduledActionInput";
import { DeleteScheduledActionOutput } from "../shapes/DeleteScheduledActionOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteScheduledAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteScheduledAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteScheduledActionInput
  },
  output: {
    shape: DeleteScheduledActionOutput
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
