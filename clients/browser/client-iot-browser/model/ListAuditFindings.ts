import { ListAuditFindingsInput } from "./ListAuditFindingsInput";
import { ListAuditFindingsOutput } from "./ListAuditFindingsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAuditFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAuditFindings",
  http: {
    method: "POST",
    requestUri: "/audit/findings"
  },
  input: {
    shape: ListAuditFindingsInput
  },
  output: {
    shape: ListAuditFindingsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
