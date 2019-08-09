import { ListAuditMitigationActionsExecutionsInput } from "./ListAuditMitigationActionsExecutionsInput";
import { ListAuditMitigationActionsExecutionsOutput } from "./ListAuditMitigationActionsExecutionsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAuditMitigationActionsExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAuditMitigationActionsExecutions",
  http: {
    method: "GET",
    requestUri: "/audit/mitigationactions/executions"
  },
  input: {
    shape: ListAuditMitigationActionsExecutionsInput
  },
  output: {
    shape: ListAuditMitigationActionsExecutionsOutput
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
