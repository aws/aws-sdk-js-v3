import { UpdateScheduledAuditInput } from "../shapes/UpdateScheduledAuditInput";
import { UpdateScheduledAuditOutput } from "../shapes/UpdateScheduledAuditOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
