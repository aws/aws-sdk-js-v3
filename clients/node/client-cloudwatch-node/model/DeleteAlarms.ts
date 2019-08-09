import { DeleteAlarmsInput } from "./DeleteAlarmsInput";
import { DeleteAlarmsOutput } from "./DeleteAlarmsOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
