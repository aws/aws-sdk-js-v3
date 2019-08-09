import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type ReportTaskRunnerHeartbeatExceptionsUnion =
  | InternalServiceError
  | InvalidRequestException;
