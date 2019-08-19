import { ListAuditMitigationActionsTasksInput } from "../shapes/ListAuditMitigationActionsTasksInput";
import { ListAuditMitigationActionsTasksOutput } from "../shapes/ListAuditMitigationActionsTasksOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAuditMitigationActionsTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAuditMitigationActionsTasks",
  http: {
    method: "GET",
    requestUri: "/audit/mitigationactions/tasks"
  },
  input: {
    shape: ListAuditMitigationActionsTasksInput
  },
  output: {
    shape: ListAuditMitigationActionsTasksOutput
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
