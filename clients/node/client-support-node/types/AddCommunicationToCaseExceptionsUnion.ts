import { InternalServerError } from "./InternalServerError";
import { CaseIdNotFound } from "./CaseIdNotFound";
import { AttachmentSetIdNotFound } from "./AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "./AttachmentSetExpired";
export type AddCommunicationToCaseExceptionsUnion =
  | InternalServerError
  | CaseIdNotFound
  | AttachmentSetIdNotFound
  | AttachmentSetExpired;
