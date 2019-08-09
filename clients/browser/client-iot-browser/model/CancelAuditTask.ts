import { CancelAuditTaskInput } from "./CancelAuditTaskInput";
import { CancelAuditTaskOutput } from "./CancelAuditTaskOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelAuditTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelAuditTask",
  http: {
    method: "PUT",
    requestUri: "/audit/tasks/{taskId}/cancel"
  },
  input: {
    shape: CancelAuditTaskInput
  },
  output: {
    shape: CancelAuditTaskOutput
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
