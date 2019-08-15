import { SetAlarmStateInput } from "../shapes/SetAlarmStateInput";
import { SetAlarmStateOutput } from "../shapes/SetAlarmStateOutput";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { InvalidFormatFault } from "../shapes/InvalidFormatFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
