import { PutMetricAlarmInput } from "./PutMetricAlarmInput";
import { PutMetricAlarmOutput } from "./PutMetricAlarmOutput";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
