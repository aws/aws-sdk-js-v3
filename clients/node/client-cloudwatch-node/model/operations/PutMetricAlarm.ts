import { PutMetricAlarmInput } from "../shapes/PutMetricAlarmInput";
import { PutMetricAlarmOutput } from "../shapes/PutMetricAlarmOutput";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutMetricAlarm: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutMetricAlarm",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutMetricAlarmInput
  },
  output: {
    shape: PutMetricAlarmOutput
  },
  errors: [
    {
      shape: LimitExceededFault
    }
  ]
};
