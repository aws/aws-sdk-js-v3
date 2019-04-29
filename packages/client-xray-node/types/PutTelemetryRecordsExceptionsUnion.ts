import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
export type PutTelemetryRecordsExceptionsUnion =
  | InvalidRequestException
  | ThrottledException;
