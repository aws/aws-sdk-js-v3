import { SetAlarmStateInput } from "./SetAlarmStateInput";
import { SetAlarmStateOutput } from "./SetAlarmStateOutput";
import { ResourceNotFound } from "./ResourceNotFound";
import { InvalidFormatFault } from "./InvalidFormatFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetAlarmState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetAlarmState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetAlarmStateInput
  },
  output: {
    shape: SetAlarmStateOutput
  },
  errors: [
    {
      shape: ResourceNotFound
    },
    {
      shape: InvalidFormatFault
    }
  ]
};
