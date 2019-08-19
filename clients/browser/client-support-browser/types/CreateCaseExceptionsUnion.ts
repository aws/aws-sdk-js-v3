import { InternalServerError } from "./InternalServerError";
import { CaseCreationLimitExceeded } from "./CaseCreationLimitExceeded";
import { AttachmentSetIdNotFound } from "./AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "./AttachmentSetExpired";
export type CreateCaseExceptionsUnion =
  | InternalServerError
  | CaseCreationLimitExceeded
  | AttachmentSetIdNotFound
  | AttachmentSetExpired;
