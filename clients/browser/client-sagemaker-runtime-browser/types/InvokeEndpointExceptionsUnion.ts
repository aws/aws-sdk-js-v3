import { InternalFailure } from "./InternalFailure";
import { ServiceUnavailable } from "./ServiceUnavailable";
import { ValidationError } from "./ValidationError";
import { ModelError } from "./ModelError";
export type InvokeEndpointExceptionsUnion =
  | InternalFailure
  | ServiceUnavailable
  | ValidationError
  | ModelError;
