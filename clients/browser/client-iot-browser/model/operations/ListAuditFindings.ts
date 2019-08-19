import { ListAuditFindingsInput } from "../shapes/ListAuditFindingsInput";
import { ListAuditFindingsOutput } from "../shapes/ListAuditFindingsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
