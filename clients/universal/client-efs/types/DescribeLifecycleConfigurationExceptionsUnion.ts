import { InternalServerError } from "./InternalServerError";
import { BadRequest } from "./BadRequest";
import { FileSystemNotFound } from "./FileSystemNotFound";
export type DescribeLifecycleConfigurationExceptionsUnion =
  | InternalServerError
  | BadRequest
  | FileSystemNotFound;
