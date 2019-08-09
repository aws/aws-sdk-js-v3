import { InternalServerError } from "./InternalServerError";
import { CaseIdNotFound } from "./CaseIdNotFound";
export type DescribeCommunicationsExceptionsUnion =
  | InternalServerError
  | CaseIdNotFound;
