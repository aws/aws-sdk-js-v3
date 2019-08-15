import { CancelAuditMitigationActionsTaskInput } from "../shapes/CancelAuditMitigationActionsTaskInput";
import { CancelAuditMitigationActionsTaskOutput } from "../shapes/CancelAuditMitigationActionsTaskOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
