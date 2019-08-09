import { CreateCaseInput } from "./CreateCaseInput";
import { CreateCaseOutput } from "./CreateCaseOutput";
import { InternalServerError } from "./InternalServerError";
import { CaseCreationLimitExceeded } from "./CaseCreationLimitExceeded";
import { AttachmentSetIdNotFound } from "./AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "./AttachmentSetExpired";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCase: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCase",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCaseInput
  },
  output: {
    shape: CreateCaseOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: CaseCreationLimitExceeded
    },
    {
      shape: AttachmentSetIdNotFound
    },
    {
      shape: AttachmentSetExpired
    }
  ]
};
