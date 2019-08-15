import { ListAuditMitigationActionsExecutionsInput } from "../shapes/ListAuditMitigationActionsExecutionsInput";
import { ListAuditMitigationActionsExecutionsOutput } from "../shapes/ListAuditMitigationActionsExecutionsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
