import { BadRequest } from "./BadRequest";
import { InternalServerError } from "./InternalServerError";
import { ResourceNotFound } from "./ResourceNotFound";
import { NotServiceResourceError } from "./NotServiceResourceError";
import { ResourceDoesNotSupportTagging } from "./ResourceDoesNotSupportTagging";
export type TagResourceExceptionsUnion =
  | BadRequest
  | InternalServerError
  | ResourceNotFound
  | NotServiceResourceError
  | ResourceDoesNotSupportTagging;
