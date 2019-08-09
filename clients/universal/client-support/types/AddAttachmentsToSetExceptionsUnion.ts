import { InternalServerError } from "./InternalServerError";
import { AttachmentSetIdNotFound } from "./AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "./AttachmentSetExpired";
import { AttachmentSetSizeLimitExceeded } from "./AttachmentSetSizeLimitExceeded";
import { AttachmentLimitExceeded } from "./AttachmentLimitExceeded";
export type AddAttachmentsToSetExceptionsUnion =
  | InternalServerError
  | AttachmentSetIdNotFound
  | AttachmentSetExpired
  | AttachmentSetSizeLimitExceeded
  | AttachmentLimitExceeded;
