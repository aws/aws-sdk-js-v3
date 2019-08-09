import { UpdateScheduledAuditInput } from "./UpdateScheduledAuditInput";
import { UpdateScheduledAuditOutput } from "./UpdateScheduledAuditOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateScheduledAudit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateScheduledAudit",
  http: {
    method: "PATCH",
    requestUri: "/audit/scheduledaudits/{scheduledAuditName}"
  },
  input: {
    shape: UpdateScheduledAuditInput
  },
  output: {
    shape: UpdateScheduledAuditOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
