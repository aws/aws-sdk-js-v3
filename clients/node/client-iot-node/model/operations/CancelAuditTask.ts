import { CancelAuditTaskInput } from "../shapes/CancelAuditTaskInput";
import { CancelAuditTaskOutput } from "../shapes/CancelAuditTaskOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
