import { InternalServerError } from "./InternalServerError";
import { DescribeAttachmentLimitExceeded } from "./DescribeAttachmentLimitExceeded";
import { AttachmentIdNotFound } from "./AttachmentIdNotFound";
export type DescribeAttachmentExceptionsUnion =
  | InternalServerError
  | DescribeAttachmentLimitExceeded
  | AttachmentIdNotFound;
