import { ListCustomVerificationEmailTemplatesInput } from "./ListCustomVerificationEmailTemplatesInput";
import { ListCustomVerificationEmailTemplatesOutput } from "./ListCustomVerificationEmailTemplatesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListCustomVerificationEmailTemplates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCustomVerificationEmailTemplates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCustomVerificationEmailTemplatesInput
  },
  output: {
    shape: ListCustomVerificationEmailTemplatesOutput,
    resultWrapper: "ListCustomVerificationEmailTemplatesResult"
  },
  errors: []
};
