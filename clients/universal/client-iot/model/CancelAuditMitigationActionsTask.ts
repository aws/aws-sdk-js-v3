import { CancelAuditMitigationActionsTaskInput } from "./CancelAuditMitigationActionsTaskInput";
import { CancelAuditMitigationActionsTaskOutput } from "./CancelAuditMitigationActionsTaskOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelAuditMitigationActionsTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelAuditMitigationActionsTask",
  http: {
    method: "PUT",
    requestUri: "/audit/mitigationactions/tasks/{taskId}/cancel"
  },
  input: {
    shape: CancelAuditMitigationActionsTaskInput
  },
  output: {
    shape: CancelAuditMitigationActionsTaskOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
