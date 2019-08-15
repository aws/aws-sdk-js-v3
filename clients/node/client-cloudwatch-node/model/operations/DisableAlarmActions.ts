import { DisableAlarmActionsInput } from "../shapes/DisableAlarmActionsInput";
import { DisableAlarmActionsOutput } from "../shapes/DisableAlarmActionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableAlarmActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableAlarmActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableAlarmActionsInput
  },
  output: {
    shape: DisableAlarmActionsOutput
  },
  errors: []
};
