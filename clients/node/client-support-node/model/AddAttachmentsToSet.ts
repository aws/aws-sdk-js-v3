import { AddAttachmentsToSetInput } from "./AddAttachmentsToSetInput";
import { AddAttachmentsToSetOutput } from "./AddAttachmentsToSetOutput";
import { InternalServerError } from "./InternalServerError";
import { AttachmentSetIdNotFound } from "./AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "./AttachmentSetExpired";
import { AttachmentSetSizeLimitExceeded } from "./AttachmentSetSizeLimitExceeded";
import { AttachmentLimitExceeded } from "./AttachmentLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddAttachmentsToSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddAttachmentsToSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddAttachmentsToSetInput
  },
  output: {
    shape: AddAttachmentsToSetOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: AttachmentSetIdNotFound
    },
    {
      shape: AttachmentSetExpired
    },
    {
      shape: AttachmentSetSizeLimitExceeded
    },
    {
      shape: AttachmentLimitExceeded
    }
  ]
};
