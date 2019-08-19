import { CreateScheduledAuditInput } from "../shapes/CreateScheduledAuditInput";
import { CreateScheduledAuditOutput } from "../shapes/CreateScheduledAuditOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateScheduledAudit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateScheduledAudit",
  http: {
    method: "POST",
    requestUri: "/audit/scheduledaudits/{scheduledAuditName}"
  },
  input: {
    shape: CreateScheduledAuditInput
  },
  output: {
    shape: CreateScheduledAuditOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: LimitExceededException
    }
  ]
};
