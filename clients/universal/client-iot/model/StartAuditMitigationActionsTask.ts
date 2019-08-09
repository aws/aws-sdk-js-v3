import { StartAuditMitigationActionsTaskInput } from "./StartAuditMitigationActionsTaskInput";
import { StartAuditMitigationActionsTaskOutput } from "./StartAuditMitigationActionsTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { TaskAlreadyExistsException } from "./TaskAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartAuditMitigationActionsTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartAuditMitigationActionsTask",
  http: {
    method: "POST",
    requestUri: "/audit/mitigationactions/tasks/{taskId}"
  },
  input: {
    shape: StartAuditMitigationActionsTaskInput
  },
  output: {
    shape: StartAuditMitigationActionsTaskOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: TaskAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
