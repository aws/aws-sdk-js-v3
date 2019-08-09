import { ReportTaskRunnerHeartbeatInput } from "./ReportTaskRunnerHeartbeatInput";
import { ReportTaskRunnerHeartbeatOutput } from "./ReportTaskRunnerHeartbeatOutput";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
