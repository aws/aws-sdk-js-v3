import { InternalServerError } from "./InternalServerError";
import { InvalidDocument } from "./InvalidDocument";
import { InvalidDocumentVersion } from "./InvalidDocumentVersion";
export type DescribeDocumentExceptionsUnion =
  | InternalServerError
  | InvalidDocument
  | InvalidDocumentVersion;
