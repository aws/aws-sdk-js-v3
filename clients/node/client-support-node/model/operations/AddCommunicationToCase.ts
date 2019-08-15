import { AddCommunicationToCaseInput } from "../shapes/AddCommunicationToCaseInput";
import { AddCommunicationToCaseOutput } from "../shapes/AddCommunicationToCaseOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { CaseIdNotFound } from "../shapes/CaseIdNotFound";
import { AttachmentSetIdNotFound } from "../shapes/AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "../shapes/AttachmentSetExpired";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
