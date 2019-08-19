import { DeleteScheduledAuditInput } from "../shapes/DeleteScheduledAuditInput";
import { DeleteScheduledAuditOutput } from "../shapes/DeleteScheduledAuditOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
