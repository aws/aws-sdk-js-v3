import { ReportTaskRunnerHeartbeatInput } from "../shapes/ReportTaskRunnerHeartbeatInput";
import { ReportTaskRunnerHeartbeatOutput } from "../shapes/ReportTaskRunnerHeartbeatOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReportTaskRunnerHeartbeat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReportTaskRunnerHeartbeat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReportTaskRunnerHeartbeatInput
  },
  output: {
    shape: ReportTaskRunnerHeartbeatOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    }
  ]
};
