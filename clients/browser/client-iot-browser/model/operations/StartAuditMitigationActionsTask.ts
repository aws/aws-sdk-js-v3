import { StartAuditMitigationActionsTaskInput } from "../shapes/StartAuditMitigationActionsTaskInput";
import { StartAuditMitigationActionsTaskOutput } from "../shapes/StartAuditMitigationActionsTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TaskAlreadyExistsException } from "../shapes/TaskAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
