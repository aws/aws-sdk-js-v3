import { AddAttachmentsToSetInput } from "../shapes/AddAttachmentsToSetInput";
import { AddAttachmentsToSetOutput } from "../shapes/AddAttachmentsToSetOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { AttachmentSetIdNotFound } from "../shapes/AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "../shapes/AttachmentSetExpired";
import { AttachmentSetSizeLimitExceeded } from "../shapes/AttachmentSetSizeLimitExceeded";
import { AttachmentLimitExceeded } from "../shapes/AttachmentLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
