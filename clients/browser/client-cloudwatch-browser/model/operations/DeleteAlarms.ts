import { DeleteAlarmsInput } from "../shapes/DeleteAlarmsInput";
import { DeleteAlarmsOutput } from "../shapes/DeleteAlarmsOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAlarms: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAlarms",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAlarmsInput
  },
  output: {
    shape: DeleteAlarmsOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    }
  ]
};
