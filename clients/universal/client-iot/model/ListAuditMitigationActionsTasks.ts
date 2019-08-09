import { ListAuditMitigationActionsTasksInput } from "./ListAuditMitigationActionsTasksInput";
import { ListAuditMitigationActionsTasksOutput } from "./ListAuditMitigationActionsTasksOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
