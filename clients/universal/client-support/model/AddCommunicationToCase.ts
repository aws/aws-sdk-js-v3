import { AddCommunicationToCaseInput } from "./AddCommunicationToCaseInput";
import { AddCommunicationToCaseOutput } from "./AddCommunicationToCaseOutput";
import { InternalServerError } from "./InternalServerError";
import { CaseIdNotFound } from "./CaseIdNotFound";
import { AttachmentSetIdNotFound } from "./AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "./AttachmentSetExpired";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddCommunicationToCase: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddCommunicationToCase",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddCommunicationToCaseInput
  },
  output: {
    shape: AddCommunicationToCaseOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: CaseIdNotFound
    },
    {
      shape: AttachmentSetIdNotFound
    },
    {
      shape: AttachmentSetExpired
    }
  ]
};
