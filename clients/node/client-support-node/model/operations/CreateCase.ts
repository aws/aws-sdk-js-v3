import { CreateCaseInput } from "../shapes/CreateCaseInput";
import { CreateCaseOutput } from "../shapes/CreateCaseOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { CaseCreationLimitExceeded } from "../shapes/CaseCreationLimitExceeded";
import { AttachmentSetIdNotFound } from "../shapes/AttachmentSetIdNotFound";
import { AttachmentSetExpired } from "../shapes/AttachmentSetExpired";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
