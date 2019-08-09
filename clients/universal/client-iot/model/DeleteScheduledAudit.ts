import { DeleteScheduledAuditInput } from "./DeleteScheduledAuditInput";
import { DeleteScheduledAuditOutput } from "./DeleteScheduledAuditOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteScheduledAudit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteScheduledAudit",
  http: {
    method: "DELETE",
    requestUri: "/audit/scheduledaudits/{scheduledAuditName}"
  },
  input: {
    shape: DeleteScheduledAuditInput
  },
  output: {
    shape: DeleteScheduledAuditOutput
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
